function canJump(nums: number[]): boolean {
  let currFar = 0,
    currEnd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    console.log(
      `i = ${i}  (${nums[i]})    currFar = ${currFar}    currEnd = ${currEnd}`,
    );
    currFar = Math.max(currFar, i + nums[i]);

    if (i === currEnd) {
      if (currFar === currEnd) return false;

      currEnd = currFar;
    }
  }

  return true;
}

console.log("---- RESULT", canJump([2, 3, 1, 1, 4, 1]), "true", "----\n");

console.log("---- RESULT", canJump([2, 3, 1, 1, 4]), "true", "----\n");

console.log("---- RESULT", canJump([3, 2, 1, 0, 4]), "false", "----\n");
