function multiply(num1: string, num2: string): string {
  const length = num1.length > num2.length ? num1.length : num2.length;

  for (let i = 0; i < num1.length; i++) {
    const n1 = Number(num1[i]);
    let rest = 0;
    for (let j = 0; j < num2.length; j++) {
      const n2 = Number(num2[j]);
      const r = n2 * n1;
      rest = r % 10;
    }
  }

  throw new Error("TODO: Implement solution");
}

/**
 * 111
 * 1232
 *  456
 * ----
 *  392
 */

console.log("---- RESULT", multiply("2", "3"), "6", "----\n");

console.log("---- RESULT", multiply("123", "456"), "56088", "----\n");
