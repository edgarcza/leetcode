function groupAnagrams(strs: string[]): string[][] {
  const ans = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    if (ans.has(key)) {
      const a = ans.set(key, [...(ans.get(key) ?? []), strs[i]]);
    } else {
      ans.set(key, [strs[i]]);
    }
  }

  console.log(ans);

  const res: string[][] = [];

  for (const [_, value] of ans) {
    res.push(value);
  }

  return res;
}

console.log(
  "---- RESULT",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
  '[["bat"],["nat","tan"],["ate","eat","tea"]]',
  "----\n",
);
