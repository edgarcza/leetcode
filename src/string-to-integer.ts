function myAtoi(s: string): number {
  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const nums: number[] = [];
  let num = 0;
  let factor = 1;
  let reading = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && !reading) continue;

    if (s[i] === "+" && !reading) {
      reading = true;
      continue;
    }

    if (s[i] === "-" && !reading) {
      factor = -1;
      reading = true;
      continue;
    }

    if (NUMBERS.includes(s[i]!)) {
      reading = true;
      nums.push(parseInt(s[i]!));
    } else {
      break;
    }
  }

  for (let n = 0; n < nums.length; n++) {
    num += nums[n]! * 10 ** (nums.length - (n + 1)) * factor;
  }

  console.log(nums, num, num | 0);

  return num > 2147483647 ? 2147483647 : num < -2147483648 ? -2147483648 : num;
}

console.log("\n ---- RESULT", myAtoi("42"));
console.log("\n ---- RESULT", myAtoi("-042"));
console.log("\n ---- RESULT", myAtoi("1337c0d3"));
console.log("\n ---- RESULT", myAtoi("0-1"));
console.log("\n ---- RESULT", myAtoi("words and 987"));
console.log("\n ---- RESULT", myAtoi("-91283472332"));
console.log("\n ---- RESULT", myAtoi("+1"));
console.log("\n ---- RESULT", myAtoi("+-12"));
