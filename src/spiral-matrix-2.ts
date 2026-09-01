function generateMatrix(n: number): number[][] {
  let t = 0,
    r = n - 1,
    b = n - 1,
    l = 0;
  const mat: number[][] = [];

  function push(x: number, y: number, n: number) {
    if (!mat[y]) mat[y] = [];
    mat[y][x] = n;
  }

  let count = 1;

  while (count <= n * n) {
    for (let i = l; i <= r; i++) {
      push(i, t, count++);
    }
    t++;

    for (let i = t; i <= b; i++) {
      push(r, i, count++);
    }
    r--;

    for (let i = r; i >= l; i--) {
      push(i, b, count++);
    }
    b--;

    for (let i = b; i >= t; i--) {
      push(l, i, count++);
    }
    l++;
  }

  return mat;
}

console.log(
  "---- RESULT",
  generateMatrix(3),
  "[[1,2,3],[8,9,4],[7,6,5]]",
  "----\n",
);

console.log("---- RESULT", generateMatrix(1), "[[1]]", "----\n");

console.log("---- RESULT", generateMatrix(4), "[[1]]", "----\n");
