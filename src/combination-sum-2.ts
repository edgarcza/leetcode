function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  console.log(candidates.join(" "), "   =>   ", target);

  const cs: number[][] = [];

  function asd(comb: number[], sum: number, ii: number) {
    if (sum === target) {
      cs.push(comb);
      return;
    }

    if (sum > target) return;

    for (let i = ii; i < candidates.length; i++) {
      if (i > ii && candidates[i] === candidates[i - 1]) continue;
      asd([...comb, candidates[i]!], sum + candidates[i]!, i + 1);
    }
  }

  asd([], 0, 0);

  return cs;
}

console.log(
  "---- RESULT",
  combinationSum2([10, 1, 2, 7, 6, 1, 5], 8),
  "[[1,1,6],[1,2,5],[1,7],[2,6]]",
  "----\n",
);

console.log(
  "---- RESULT",
  combinationSum2([2, 5, 2, 1, 2], 5),
  "[[1,2,2],[5]]",
  "----\n",
);

console.log("---- RESULT", combinationSum2([1], 1), "[[1]]", "----\n");

console.log(
  "---- RESULT",
  combinationSum2(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30,
  ),
  "[-]",
  "----\n",
);
