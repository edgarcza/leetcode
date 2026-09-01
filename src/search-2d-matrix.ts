function searchMatrix(matrix: number[][], target: number): boolean {
  let start = 0,
    end = matrix.length * matrix[0].length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const row = Math.floor(mid / matrix[0].length);
    const col = mid % matrix[0].length;

    console.log(mid, row, col, matrix[row][col]);
    if (matrix[row][col] === target) return true;

    if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

console.log(
  "---- RESULT",
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
  "true",
  "----\n",
);

console.log(
  "---- RESULT",
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
  "false",
  "----\n",
);
