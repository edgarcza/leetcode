function minPathSum(grid: number[][]): number {
  const s: number[][] = grid;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (r === 0 && c === 0) {
        s[r][c] = grid[r][c];
        continue;
      }

      if (r === 0) {
        s[r][c] = grid[r][c] + s[r][c - 1];
        continue;
      }

      if (c === 0) {
        s[r][c] = grid[r][c] + s[r - 1][c];
        continue;
      }

      s[r][c] = grid[r][c] + Math.min(s[r - 1][c], s[r][c - 1]);
    }
  }

  return s[s.length - 1][s[0].length - 1];
}

console.log(
  "---- RESULT",
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
  "7",
  "----\n",
);

console.log(
  "---- RESULT",
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]),
  "12",
  "----\n",
);
