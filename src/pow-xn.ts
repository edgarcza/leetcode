function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;

  let res = x;
  let count = 1;
  const rn = Math.abs(n);

  while (count < rn) {
    res *= x;
    count++;

    if (n < 0 && 1 / res === 0) break;
  }

  return n > 0 ? res : 1 / res;
}

console.log("---- RESULT", myPow(2, 10), "1024", "----\n");

console.log("---- RESULT", myPow(2.1, 3), "9.261", "----\n");

console.log("---- RESULT", myPow(2, -2), "0.25", "----\n");

console.log("---- RESULT", myPow(0.44528, 0), "1", "----\n");

console.log("---- RESULT", myPow(1, 2147483647), "1", "----\n");

console.time(); // 1.40
console.log("---- RESULT", myPow(2, -2147483648), "1", "----\n");
console.timeEnd();

console.time(); // 1.40
console.log("---- RESULT", myPow(-1, 2147483646), "-1", "----\n");
console.timeEnd();
