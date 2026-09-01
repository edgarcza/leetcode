function reverse(x: number): number {
  let nums: number[] = [];
  let num = 0;

  while (x !== 0) {
    nums.push(x % 10);
    x = (x / 10) | 0;
  }
  console.log("nums", nums, nums.length);
  for (let n = 0; n < nums.length; n++) {
    num += nums[n]! * 10 ** (nums.length - (n + 1));
  }

  return (num | 0) === num ? num : 0;
}

console.log("\n ---- RESULT", reverse(123));
console.log("\n ---- RESULT", reverse(-123));
console.log("\n ---- RESULT", reverse(120));
console.log("\n ---- RESULT", reverse(1534236469));
