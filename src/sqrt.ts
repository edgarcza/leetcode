function mySqrt(x: number): number {
  if (x <= 1) return x;

  let l = 1,
    r = Math.floor(x / 2);

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    const sq = mid * mid;

    if (sq === x) return mid;

    if (sq < x) l = mid + 1;
    else r = mid - 1;
  }

  return r;
}

console.log("---- RESULT", mySqrt(4), "2", "----\n");

console.log("---- RESULT", mySqrt(8), "2", "----\n");

console.log("---- RESULT", mySqrt(2147395600), "2", "----\n");
