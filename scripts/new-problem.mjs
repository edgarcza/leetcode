#!/usr/bin/env node

import { access, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";
import { createInterface } from "node:readline/promises";

const [, , ...args] = process.argv;

if (args.includes("--help") || args.includes("-h")) {
  console.log(`Usage:
  npm run new
  npm run new -- <problem> [signature] [example-arguments expected]...

Example:
  npm run new -- two-sum "twoSum(nums: number[], target: number): number[]" "[2, 7, 11, 15], 9" "[0, 1]"`);
  process.exit(0);
}

const root = resolve(import.meta.dirname, "..");
const packageJsonPath = resolve(root, "package.json");
const terminal = process.stdin.isTTY && process.stdout.isTTY;
const prompt = terminal
  ? createInterface({ input: process.stdin, output: process.stdout })
  : null;

async function ask(question, currentValue, fallback = "") {
  if (currentValue !== undefined) return currentValue.trim();
  if (!prompt) return fallback;

  const suffix = fallback ? ` (${fallback})` : "";
  const answer = (await prompt.question(`${question}${suffix}: `)).trim();
  return answer || fallback;
}

async function askForAnotherExample() {
  while (true) {
    const answer = (await prompt.question("Add another example? (y/N): "))
      .trim()
      .toLowerCase();

    if (answer === "" || answer === "n" || answer === "no") return false;
    if (answer === "y" || answer === "yes") return true;

    console.log('Please answer "y" or "n".');
  }
}

function toSlug(value) {
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toFunctionName(slug) {
  const name = slug.replace(/-([a-z0-9])/g, (_, character) =>
    character.toUpperCase(),
  );

  return /^[a-z_$]/i.test(name) ? name : "solution";
}

function getFunctionName(signature) {
  const match = signature.match(/^\s*([A-Za-z_$][\w$]*)\s*\(/);
  if (!match) {
    throw new Error(
      'The signature must look like "twoSum(nums: number[]): number[]".',
    );
  }

  return match[1];
}

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

try {
  const problem = await ask("Problem name", args[0]);
  const slug = toSlug(problem);

  if (!slug) {
    throw new Error("A problem name is required.");
  }

  const defaultFunctionName = toFunctionName(slug);
  const signature = await ask(
    "Function signature",
    args[1],
    `${defaultFunctionName}(...args: unknown[]): unknown`,
  );
  const functionName = getFunctionName(signature);
  const examples = [
    {
      arguments: await ask("Example arguments", args[2]),
      expected: await ask("Expected result", args[3], "EXPECTED_RESULT"),
    },
  ];
  const additionalExamples = args.slice(4);

  if (additionalExamples.length % 2 !== 0) {
    throw new Error(
      "Each additional example needs both arguments and an expected result.",
    );
  }

  for (let index = 0; index < additionalExamples.length; index += 2) {
    examples.push({
      arguments: additionalExamples[index].trim(),
      expected: additionalExamples[index + 1].trim(),
    });
  }

  if (prompt) {
    while (await askForAnotherExample()) {
      examples.push({
        arguments: await ask("Example arguments"),
        expected: await ask("Expected result", undefined, "EXPECTED_RESULT"),
      });
    }
  }

  const filePath = resolve(root, "src", `${slug}.ts`);
  const scriptName = slug.replace(/-/g, "");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

  if (await exists(filePath)) {
    throw new Error(`src/${slug}.ts already exists; no files were changed.`);
  }

  if (packageJson.scripts?.[scriptName]) {
    throw new Error(
      `The package script "${scriptName}" already exists; no files were changed.`,
    );
  }

  const resultLogs = examples
    .map(
      (example) => `console.log(
  "---- RESULT",
  ${functionName}(${example.arguments}),
  ${JSON.stringify(example.expected)},
  "----\\n",
);`,
    )
    .join("\n\n");

  const source = `function ${signature} {
  throw new Error("TODO: Implement solution");
}

${resultLogs}
`;

  packageJson.scripts ??= {};
  packageJson.scripts[scriptName] = `tsx src/${slug}.ts`;

  await writeFile(filePath, source, { encoding: "utf8", flag: "wx" });

  try {
    await writeFile(
      packageJsonPath,
      `${JSON.stringify(packageJson, null, 2)}\n`,
      "utf8",
    );
  } catch (error) {
    console.error(
      `Created src/${slug}.ts, but could not update package.json. Add this script manually:`,
    );
    console.error(`  "${scriptName}": "tsx src/${slug}.ts"`);
    throw error;
  }

  console.log(`Created src/${slug}.ts`);
  console.log(`Added npm run ${scriptName}`);
} catch (error) {
  console.error(`Could not create problem: ${error.message}`);
  process.exitCode = 1;
} finally {
  prompt?.close();
}
