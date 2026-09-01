function plusOne(digits: number[]): number[] {
  console.log(digits);
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;

      return digits;
    }
  }

  digits.unshift(1);

  return digits;
}

console.log("---- RESULT", plusOne([1, 2, 3]), "[1,2,4]", "----\n");

console.log("---- RESULT", plusOne([4, 3, 2, 1]), "[4,3,2,2]", "----\n");

console.log("---- RESULT", plusOne([9]), "[1,0]", "----\n");

console.log("---- RESULT", plusOne([4, 9, 9, 9]), "[5,0,0,0]", "----\n");

console.log("---- RESULT", plusOne([9, 9, 9]), "[1,0,0,0]", "----\n");

console.log("---- RESULT", plusOne([3, 9, 9]), "[4,0,0]", "----\n");

console.log("---- RESULT", plusOne([3, 4, 9, 9]), "[3,5,0,0]", "----\n");

console.log("---- RESULT", plusOne([9, 4, 8, 9, 9]), "[3,5,0,0]", "----\n");
