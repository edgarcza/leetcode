function firstMissingPositive(nums: number[]): number {
  console.log(nums);

  let i = 0,
    l = nums.length;

  while (i < l) {
    const nidx = nums[i]! - 1;
    if (nums[i]! <= 0 || nums[i]! > l || nums[nidx] === nums[i]) {
      i++;
      continue;
    }

    const tmp = nums[i]!;
    nums[i] = nums[nidx]!;
    nums[nidx] = tmp;
  }

  for (let j = 0; j < l; j++) {
    if (nums[j] !== j + 1) return j + 1;
  }

  return l + 1;
}

console.log("---- RESULT", firstMissingPositive([1, 2, 0]), "3", "----\n");

console.log("---- RESULT", firstMissingPositive([3, 4, -1, 1]), "2", "----\n");

console.log(
  "---- RESULT",
  firstMissingPositive([-3, -1, 7, 11, 15]),
  "1",
  "----\n",
);

console.log(
  "---- RESULT",
  firstMissingPositive([7, 8, 9, 11, 12]),
  "1",
  "----\n",
);

console.log("---- RESULT", firstMissingPositive([1]), "2", "----\n");

console.log(
  "---- RESULT",
  firstMissingPositive([0, 2, 2, 1, 1]),
  "3",
  "----\n",
);
