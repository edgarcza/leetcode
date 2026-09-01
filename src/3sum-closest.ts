function threeSumClosest(nums: number[], target: number): number {
  let closest: number | null = null;

  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let [l, r] = [i + 1, nums.length - 1];

    while (l < r) {
      // i + l + r = target
      //l + r = target - i
      const res = nums[i]! + nums[l]! + nums[r]!;
      console.log(res, closest);

      if (
        closest === null ||
        Math.abs(res - target) < Math.abs(closest - target)
      ) {
        closest = res;
        // while (l < r && nums[l] === nums[l + 1]) l++;
        // l++;
        // r--;
      }

      if (res < target) {
        l++;
      } else {
        r--;
      }
    }
  }

  return closest;
}

console.log("---- RESULT", threeSumClosest([-1, 2, 1, -4], 1), "2", "----\n");

console.log("---- RESULT", threeSumClosest([0, 0, 0], 1), "0", "----\n");

console.log("---- RESULT", threeSumClosest([0, 1, 2], 0), "3", "----\n");

console.log("---- RESULT", threeSumClosest([1, 1, 1, 1], 0), "3", "----\n");

console.log(
  "---- RESULT",
  threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1),
  "60",
  "----\n",
);
