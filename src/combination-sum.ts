function combinationSum(candidates: number[], target: number): number[][] {
  console.log(candidates.join(" "), "   =>   ", target);

  const cs: number[][] = [];

  function asd(comb: number[], sum: number, ii: number) {
    if (sum === target) cs.push(comb);

    if (sum > target) return;

    for (let i = ii; i < candidates.length; i++) {
      asd([...comb, candidates[i]!], sum + candidates[i]!, i);
    }
  }

  asd([], 0, 0);

  return cs;
}

console.log(
  "---- RESULT",
  combinationSum([2, 3, 6, 7], 7),
  "[[2,2,3],[7]]",
  "----\n",
);

console.log(
  "---- RESULT",
  combinationSum([2, 3, 5], 8),
  "[[2,2,2,2],[2,3,3],[3,5]]",
  "----\n",
);

console.log("---- RESULT", combinationSum([2], 1), "[]", "----\n");
