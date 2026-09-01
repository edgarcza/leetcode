function maxSubArray(nums: number[]): number {
  console.log(nums);
  let largestFinal = nums[0];
  let largest = nums[0];
  let largesta: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (largest < 0) {
      largest = nums[i];
      largesta = [nums[i]];
    } else {
      largest += nums[i];
      largesta.push(nums[i]);
    }
    if (largest > largestFinal) largestFinal = largest;
  }

  return largestFinal;

  // let largest: null | number = null;
  // let largseta: number[] = [];
  // let len = nums.length;

  // while (len > 0) {
  //   let i = 0;
  //   while (i <= nums.length - len) {
  //     let sum = 0;
  //     let arr: number[] = [];

  //     for (let j = i; j < i + len; j++) {
  //       sum += nums[j];
  //       arr.push(nums[j]);
  //     }

  //     console.log(`(${len}) - Subrray ${arr} = ${sum}`);

  //     if (largest === null || sum > largest) {
  //       largest = sum;
  //       largseta = arr;
  //     }

  //     i++;
  //   }

  //   len--;
  // }

  // console.log(largseta);

  // return largest ?? 0;
}

console.log(
  "---- RESULT",
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  "6",
  "----\n",
);

console.log("---- RESULT", maxSubArray([1]), "1", "----\n");

console.log("---- RESULT", maxSubArray([5, 4, -1, 7, 8]), "23", "----\n");

console.log("---- RESULT", maxSubArray([-1, 0, -2]), "0", "----\n");
