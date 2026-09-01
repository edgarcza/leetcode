function sortColors(nums: number[]): void {
  console.log(nums);

  let start = 0,
    mid = 0,
    end = nums.length - 1;

  while (mid <= end) {
    if (nums[mid] === 0) {
      const t = nums[start];
      nums[start] = nums[mid];
      nums[mid] = t;
      start++;
      mid++;
    } else if (nums[mid] === 2) {
      const t = nums[end];
      nums[end] = nums[mid];
      nums[mid] = t;
      end--;
    } else {
      mid++;
    }
  }

  console.log(nums);
}

console.log(
  "---- RESULT",
  sortColors([2, 0, 2, 1, 1, 0]),
  "[0,0,1,1,2,2]",
  "----\n",
);

console.log("---- RESULT", sortColors([2, 0, 1]), "[0,1,2]", "----\n");
