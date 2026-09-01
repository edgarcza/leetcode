function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    console.log("MID", nums[mid]);

    if (nums[mid]! === target) return mid;

    if (nums[mid]! >= nums[right]!) {
      if (target >= nums[left]! && target < nums[mid]!) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid]! < target && target <= nums[right]!) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log("---- RESULT", search([4, 5, 6, 7, 0, 1, 2], 0), "4", "----\n");

console.log(
  "---- RESULT",
  search([8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7], 1),
  "4",
  "----\n",
);

console.log(
  "---- RESULT",
  search([3, 4, 5, 6, 7, 8, 9, 1, 2], 4),
  "1",
  "----\n",
);
console.log(
  "---- RESULT",
  search([3, 4, 5, 6, 7, 8, 9, 1, 2], 1),
  "7",
  "----\n",
);

console.log(
  "---- RESULT",
  search([8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7], 10),
  "2",
  "----\n",
);

console.log(
  "---- RESULT",
  search([4, 5, 6, 7, 8, 9, 1, 2, 3], 9),
  "5",
  "----\n",
);

console.log("---- RESULT", search([4, 5, 6, 7, 0, 1, 2], 3), "-1", "----\n");

console.log("---- RESULT", search([1], 0), "-1", "----\n");

console.log("---- RESULT", search([1,3], 3), "1", "----\n");
