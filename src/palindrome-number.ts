function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let nums: number[] = [];
  let num = x;
  let numR = 0;

  while (num !== 0) {
    numR = numR * 10 + (num % 10);
    num = (num / 10) | 0;
  }

  return x === numR;
}

console.log("\n ---- RESULT", isPalindrome(121));
console.log("\n ---- RESULT", isPalindrome(-121));
console.log("\n ---- RESULT", isPalindrome(10));
