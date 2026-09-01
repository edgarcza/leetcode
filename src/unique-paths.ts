function uniquePaths(m: number, n: number): number {
  const a = m - 1,
    b = n - 1,
    c = a + b;

  const max = Math.max(a, b);
  let cr = 1;

  for (let i = c; i > max; i--) {
    cr *= i;
  }

  const min = Math.min(a, b);
  let mr = 1;

  for (let i = min; i > 0; i--) {
    mr *= i;
  }

  return cr / mr;
}

console.log("---- RESULT", uniquePaths(3, 7), "28", "----\n");

console.log("---- RESULT", uniquePaths(3, 2), "3", "----\n");

console.log("---- RESULT", uniquePaths(100, 100), "3", "----\n");

8!;
2! * 6!;
