function searchInsert(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1;

  console.log(nums, target);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) return mid;

    if (target < nums[mid]!) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

console.log("---- RESULT", searchInsert([1, 3, 5, 6], 5), "2", "----\n");

console.log("---- RESULT", searchInsert([1, 3, 5, 6], 2), "1", "----\n");

console.log("---- RESULT", searchInsert([1, 3, 5, 6], 7), "4", "----\n");
