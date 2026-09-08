function combine(n: number, k: number): number[][] {
  let combs: number[][] = [];
  let co: number[] = [];

  function comb(num: number, len: number) {
    if (len === k) {
      combs.push([...co]);
      return;
    }

    if (num > n) return;

    co.push(num);

    comb(num + 1, len + 1);

    co.pop();

    comb(num + 1, len);
  }

  comb(1, 0);

  return combs;
}

console.log(
  "---- RESULT",
  combine(4, 2),
  "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
  "----\n",
);

console.log("---- RESULT", combine(1, 1), "[[1]]", "----\n");

console.log("---- RESULT", combine(4, 3), "[[1]]", "----\n");

console.log(
  "---- RESULT",
  combine(6, 3),
  "[[1, 2, 3],[1, 2, 4],[1, 2, 5],[1, 2, 6],[1, 3, 4],[1, 3, 5],[1, 3, 6],[1, 4, 5],[1, 4, 6],[1, 5, 6],[2, 3, 4],[2, 3, 5],[2, 3, 6],[2, 4, 5],[2, 4, 6],[2, 5, 6],[3, 4, 5],[3, 4, 6],[3, 5, 6],[4, 5, 6]]",
  "----\n",
);
