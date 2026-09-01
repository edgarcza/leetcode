function threeSum(nums: number[]): number[][] {
  const ts: number[][] = [];

  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i]! > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    let [l, r] = [i + 1, nums.length - 1];
    let ll: number | null = null;
    let lr: number | null = null;

    while (l < r) {
      const res = nums[l]! + nums[r]!;
      if (res === -nums[i]!) {
        ts.push([nums[i]!, nums[l]!, nums[r]!]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        l++;
        r--;
      } else if (res < -nums[i]!) {
        l++;
      } else if (res > -nums[i]!) {
        r--;
      }
    }
  }

  return ts;
}

console.log(
  "---- RESULT",
  threeSum([-1, 0, 1, 2, -1, -4]),
  "[[-1,-1,2],[-1,0,1]]",
  "----\n",
);

console.log("---- RESULT", threeSum([0, 1, 1]), "[]", "----\n");

console.log("---- RESULT", threeSum([0, 0, 0]), "[0,0,0]", "----\n");

console.log("---- RESULT", threeSum([0, 0, 0, 0]), "[0,0,0]", "----\n");

console.log(
  "---- RESULT",
  threeSum([-100, -70, -60, 110, 120, 130, 160]),
  "[[-100,-60,160],[-70,-60,130]]",
  "----\n",
);

console.log(
  "---- RESULT",
  threeSum([
    -14, -3, 11, -3, 12, -1, 11, 13, 5, 6, -11, -14, -6, 11, -4, -15, 3, -15, 9,
    -10, 13, -10, -9, -13, -12, 12, -7, 12, 12, 3, 9, 5, -14, -3, 9, 13, 11, 5,
    3, -6, -12, -1, -5, -3, -4, -2, -10, 6, -10, 14, 3, -11, 11, 10, -9, 7, -1,
    -9, 4, -12, 2, -2, 8, 3, 3, -6, -7, -1, 6, 12, 8, 9, -12, 10, -8, -1, -7,
    -3, 12, -9, -12, 1, -5, 6, -12, -7, -2, 2, -8, -13, 5, 9, -7, -10, -3, 11,
    -1, -3, -13, -10, -14, 11, 6, -10, 6, 13, 4, 7, -13, -6, 13, 12, 10, -15, 4,
    13, -7, 9, -8, 0, 4, 4, -6, 12, 9, -2, 0,
  ]),
  "sdasd",
  "----\n",
);
