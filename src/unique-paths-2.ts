function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0]?.[0] && obstacleGrid[0][0] === 1) return 0;

  const cols = obstacleGrid[0].length;
  const rows = obstacleGrid.length;

  if (obstacleGrid[rows - 1][cols - 1] === 1) return 0;

  const p = Array(cols).fill(1);

  for (let i = 0; i < p.length; i++) {
    if (obstacleGrid[0][i] === 1 || (i > 0 && p[i - 1] === 0)) {
      p[i] = 0;
      continue;
    }
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = obstacleGrid[r][c];
      if (cell === 1) p[c] = 0;
      else {
        if (c > 0) p[c] += p[c - 1];
      }
    }
  }

  return p[cols - 1];
}

console.log(
  "---- RESULT",
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  "2",
  "----\n",
);

console.log(
  "---- RESULT",
  uniquePathsWithObstacles([
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
  ]),
  "?",
  "----\n",
);

console.log(
  "---- RESULT",
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ]),
  "1",
  "----\n",
);

console.log(
  "---- RESULT",
  uniquePathsWithObstacles([[0, 0, 0, 1, 0, 0, 0]]),
  "0",
  "----\n",
);

console.log("---- RESULT", uniquePathsWithObstacles([[0], [1]]), "0", "----\n");
