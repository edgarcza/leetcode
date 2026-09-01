function nextPermutation(nums: number[]): void {
  console.log(nums);
  let bpIdx = -1;
  let bpLIdx = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1]! < nums[i]!) {
      bpIdx = i - 1;
      break;
    }
  }

  // 5, 5, 7, 4, 3, 2
  function reverse(f = 0) {
    console.log('info', f, nums.length - f, Math.floor((nums.length - f) / 2));
    for (let i = f, pos = 0; pos < Math.floor((nums.length - f) / 2); i++, pos++) {
      console.log(i, nums.length - pos - 1);
      const tmp = nums[nums.length - pos - 1]!;
      nums[nums.length - pos - 1]! = nums[i]!;
      nums[i]! = tmp;
    }
  }

  if (bpIdx === -1) {
    reverse();
    return;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === bpIdx) continue;

    if (nums[i]! > nums[bpIdx]!) {
      bpLIdx = i;
      break;
    }
  }

  const tmp = nums[bpLIdx]!;
  nums[bpLIdx] = nums[bpIdx]!;
  nums[bpIdx] = tmp;

  reverse(bpIdx + 1);

  console.log(nums);
}

console.log("---- RESULT", nextPermutation([1, 2, 3]), "[1,3,2]", "----\n");

console.log("---- RESULT", nextPermutation([3, 2, 1]), "[1,2,3]", "----\n");

console.log("---- RESULT", nextPermutation([1, 1, 5]), "[1,5,1]", "----\n");

console.log(
  "---- RESULT",
  nextPermutation([1, 2, 3, 4]),
  "[1, 2, 4, 3]",
  "----\n",
);

console.log(
  "---- RESULT",
  nextPermutation([4, 3, 2, 1]),
  "[1, 2, 3, 4]",
  "----\n",
);

console.log("---- RESULT", nextPermutation([1, 3, 2]), "[2,1,3]", "----\n");

console.log("---- RESULT", nextPermutation([1, 5, 1]), "[5,1,1]", "----\n");

console.log(
  "---- RESULT",
  nextPermutation([5, 4, 7, 5, 3, 2]),
  "[5,5,2,3,4,7]",
  "----\n",
);
