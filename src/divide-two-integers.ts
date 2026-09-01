function divide(dividend: number, divisor: number): number {
  if (dividend === 0) return 0;

  function ret(res: number) {
    return res > 2147483647
      ? 2147483647
      : res < -2147483648
        ? -2147483648
        : res;
  }

  if (divisor === 1) return ret(dividend);
  if (divisor === -1) return ret(-dividend);

  let times = 1;
  let factor = 1;

  if (divisor < 0) {
    factor -= 2;
  }

  if (dividend < 0) {
    factor = factor > 0 ? factor - 2 : factor + 2;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let ac = divisor;

  while (ac <= dividend) {
    let [pac, ptimes] = [ac, times];
    ac += ac;
    times += times;

    if (ac > dividend) {
      ac = pac;
      times = ptimes;
      while (ac <= dividend) {
        ac += divisor;
        times++;
      }
    }
  }

  const res = factor > 0 ? times - 1 : -(times - 1);

  return ret(res);
}

console.log("---- RESULT", divide(10, 3), "3", "----\n");

console.log("---- RESULT", divide(7, -3), "-2", "----\n");

console.log("---- RESULT", divide(-17, -4), "4", "----\n");

console.log("---- RESULT", divide(-27, 5), "-5", "----\n");

console.log("---- RESULT", divide(0, 1), "0", "----\n");

console.log("---- RESULT", divide(1, 1), "1", "----\n");

console.log("---- RESULT", divide(2147483648, 1), "2147483647", "----\n");

console.log("---- RESULT", divide(-2147483648, 1), "-2147483648", "----\n");

console.log("---- RESULT", divide(-2147483648, -1), "2147483647", "----\n");

console.log("---- RESULT", divide(1, -1), "-1", "----\n");

console.log("---- RESULT", divide(550, 5), "110", "----\n");

console.time();
console.log("---- RESULT", divide(-2147483648, 4), "-536870912", "----\n");
console.timeEnd();
