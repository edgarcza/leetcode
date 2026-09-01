function setZeroes(matrix: number[][]): void {
  console.log(matrix);
  const izs = new Set<number>();
  const jzs = new Set<number>();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        izs.add(i);
        jzs.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (izs.has(i) || jzs.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log(matrix);
}

console.log(
  "---- RESULT",
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  "[[1,0,1],[0,0,0],[1,0,1]]",
  "----\n",
);

console.log(
  "---- RESULT",
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
  "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
  "----\n",
);
