function search(nums: number[], target: number): boolean {
  console.log(nums, target);
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    console.log(nums.slice(left, right + 1));
    const mid = Math.floor((right + left) / 2);

    console.log("MID", nums[mid]);

    if (nums[mid]! === target) return true;
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
      continue;
    }

    if (nums[mid] === nums[right]) {
      right = mid - 1;
      continue;
    } else if (nums[mid] === nums[left]) {
      left = mid + 1;
      continue;
    }

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
  console.log(left, right, nums[left], nums[right]);

  return false;
}

console.log("---- RESULT", search([2, 5, 6, 0, 0, 1, 2], 0), "true", "----\n");

console.log("---- RESULT", search([2, 5, 6, 0, 0, 1, 2], 3), "false", "----\n");

console.log("---- RESULT", search([1, 0, 1, 1, 1], 0), "true", "----\n");

console.log(
  "---- RESULT",
  search(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    13,
  ),
  "true",
  "----\n",
);
