function fourSum(nums: number[], target: number): number[][] {
  const ts: number[][] = [];

  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let [l, r] = [j + 1, nums.length - 1];

      // i + b + c + d = target -->
      console.log("dx", i, j, l, r);
      while (l < r) {
        console.log(nums[i]!, nums[j]!, nums[l]!, nums[r]!);
        const res = nums[i]! + nums[j]! + nums[l]! + nums[r]!;

        if (res === target) {
          ts.push([nums[i]!, nums[j]!, nums[l]!, nums[r]!]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          // while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (res < target) {
          l++;
        } else if (res > target) {
          r--;
        }
      }
    }
  }

  return ts;
}

console.log(
  "---- RESULT",
  fourSum([1, 0, -1, 0, -2, 2], 0),
  "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
  "----\n",
);

console.log(
  "---- RESULT",
  fourSum([2, 2, 2, 2, 2], 8),
  "[[2,2,2,2]]",
  "----\n",
);
