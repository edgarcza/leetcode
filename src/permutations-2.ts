function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];

  function perm(idx: number) {
    if (nums.length === idx) {
      res.push([...nums]);
      return;
    }

    const used = new Set<number>();

    for (let i = idx; i < nums.length; i++) {
      if (used.has(nums[i])) continue;

      used.add(nums[i]);

      [nums[i], nums[idx]] = [nums[idx], nums[i]];

      perm(idx + 1);

      [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
  }

  perm(0);

  return res;
}

console.log(
  "---- RESULT",
  permuteUnique([1, 1, 2]),
  "[[1,1,2], [1,2,1], [2,1,1]]",
  "----\n",
);

console.log(
  "---- RESULT",
  permuteUnique([1, 2, 3]),
  "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
  "----\n",
);
