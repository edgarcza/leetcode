function jump(nums: number[]): number {
  let currFar = 0,
    currEnd = 0,
    jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    console.log(
      `i = ${i}  (${nums[i]})    currFar = ${currFar}    currEnd = ${currEnd}`,
    );
    currFar = Math.max(currFar, i + nums[i]);

    if (i === currEnd) {
      currEnd = currFar;
      jumps++;
    }
  }

  return jumps;
}

console.log("---- RESULT", jump([2, 3, 1, 1, 4]), "2", "----\n");

console.log("---- RESULT", jump([2, 3, 0, 1, 4]), "2", "----\n");

console.log("---- RESULT", jump([4, 1, 0, 5, 0, 0, 0, 2]), "2", "----\n");
