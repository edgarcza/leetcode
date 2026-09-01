function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  function perm(idx: number) {
    if (nums.length === idx) {
      res.push([...nums]);
      return;
    }

    for (let i = idx; i < nums.length; i++) {
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
  permute([1, 2, 3, 4]),
  "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
  "----\n",
);

console.log("---- RESULT", permute([0, 1]), "[[0,1],[1,0]]", "----\n");
