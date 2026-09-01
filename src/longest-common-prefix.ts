function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0]!;

  const smallest = strs.reduce(
    (p, c) => (c.length < p.length ? c : p),
    strs[0]!,
  );

  for (let i = 0; i < smallest.length; i++) {
    let l = "";
    for (let j = 0; j < strs.length; j++) {
      if (j === 0) {
        l = strs[j]![i]!;
        continue;
      }

      if (l !== strs[j]![i]!) {
        return strs[j]!.slice(0, i);
      }
    }
  }

  return smallest;
}

console.log(
  "---- RESULT",
  longestCommonPrefix(["flower", "flow", "flight"]),
  "fl",
  "----\n",
);
console.log(
  "---- RESULT",
  longestCommonPrefix(["dog", "racecar", "car"]),
  "",
  "----\n",
);
console.log("---- RESULT", longestCommonPrefix(["a"]), "a", "----\n");
console.log(
  "---- RESULT",
  longestCommonPrefix(["hola", "hola"]),
  "hola",
  "----\n",
);
