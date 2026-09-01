function climbStairs(n: number): number {
  function f(p: number, c: number, s: number, n: number = 0) {
    if (s === n) return c;

    return f(c, p + c, s, n + 1);
  }

  const r = f(0, 1, n);

  return r;
}

console.log("---- RESULT", climbStairs(2), "2", "----\n");

console.log("---- RESULT", climbStairs(3), "3", "----\n");

console.log("---- RESULT", climbStairs(4), "5", "----\n");

console.log("---- RESULT", climbStairs(5), "8", "----\n");
