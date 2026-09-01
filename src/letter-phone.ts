function letterCombinations(digits: string): string[] {
  const abc = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  const digs = digits.split("").map((d) => abc.get(d)!.split(""));

  function nums(base: string[], rest: string[][]) {
    if (rest.length === 0) return base;

    const [add] = rest.slice(0, 1);
    const r = rest.slice(1);

    if (base.length === 0) return nums(add!, r);

    const newbase: string[] = [];

    for (let i = 0; i < base.length; i++) {
      for (let j = 0; j < add!.length; j++) {
        newbase.push(base[i]! + add![j]);
      }
    }

    return nums(newbase, r);
  }

  const comb = nums([], digs);

  return comb;
}

console.log(
  "---- RESULT",
  letterCombinations("23"),
  '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
  "----\n",
);

console.log(
  "---- RESULT",
  letterCombinations("2"),
  '["a", "b", "c"]',
  "----\n",
);

console.log(
  "---- RESULT",
  letterCombinations("359"),
  '["a", "b", "c"]',
  "----\n",
);
