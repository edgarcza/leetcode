function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  const chars: string[] = [];
  const pars = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (pars.has(s[i]!)) {
      if (chars[chars.length - 1] !== pars.get(s[i]!)) return false;

      chars.pop();
    } else {
      chars.push(s[i]!);
    }
  }

  return chars.length === 0;
}

console.log("---- RESULT", isValid("()"), "true", "----\n");

console.log("---- RESULT", isValid("()[]{}"), "true", "----\n");

console.log("---- RESULT", isValid("()[]{(([{{()}}]))}"), "true", "----\n");

console.log("---- RESULT", isValid("(]"), "false", "----\n");

console.log("---- RESULT", isValid("([])"), "true", "----\n");

console.log("---- RESULT", isValid("([)]"), "false", "----\n");

console.log("---- RESULT", isValid("["), "false", "----\n");

console.log("---- RESULT", isValid("[["), "false", "----\n");

console.log("---- RESULT", isValid("(([]){})"), "true", "----\n");
