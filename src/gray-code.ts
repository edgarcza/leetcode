function grayCode(n: number): number[] {
  const nums: number[] = [];

  const isPowerOfTwo = (n: number) => n > 0 && (n & (n - 1)) === 0;

  let count = 0;
  let currPow = 1;

  const p = Math.pow(2, n);
  for (let i = 0; i < p; i++) {
    if (isPowerOfTwo(i)) {
      count = 1;
      currPow = i;
    }

    if (currPow === 1) nums.push(i);
    else {
      nums.push(nums[i - count] + currPow);
      count += 2;
    }
  }

  return nums;
}

console.log("---- RESULT", grayCode(4), "[0,1,3,2]", "----\n");

console.log("---- RESULT", grayCode(1), "[0,1]", "----\n");
