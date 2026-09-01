function removeDuplicates(nums: (number | string)[]): number {
  const ns = new Set();
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!ns.has(nums[i]!)) {
      ns.add(nums[i]!);
      nums[pos] = nums[i]!;
      pos++;
    }
  }

  return pos;
}

console.log("---- RESULT", removeDuplicates([1, 1, 2]), "[1,2,_]", "----\n");

console.log(
  "---- RESULT",
  removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4]),
  "[0,1,2,3,4,_,_,_,_,_]",
  "----\n",
);

console.log(
  "---- RESULT",
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 6, 7, 8, 8, 9]),
  "[0,1,2,3,4,5,6,7,8,9,_,_,_,_,_,_,_]",
  "----\n",
);
