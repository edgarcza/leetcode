function removeDuplicates(nums: number[]): number {
  let currN = nums[0],
    currNA = 1,
    pos = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === currN) currNA++;
    else {
      currN = nums[i];
      currNA = 1;
    }

    if (currNA <= 2) {
      nums[pos] = nums[i];
      pos++;
    }
  }
  console.log(nums);
  return pos;
}

console.log("---- RESULT", removeDuplicates([1, 1, 1, 2, 2, 3]), "5", "----\n");

console.log(
  "---- RESULT",
  removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]),
  "7",
  "----\n",
);
