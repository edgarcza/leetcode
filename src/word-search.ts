function exist(board: string[][], word: string): boolean {
  const boardUsed = board.map((b) => b.map((bc) => false));
  const [rows, cols] = [board.length, board[0].length];
  let exists = false;

  function check(row: number, col: number, i: number) {
    if (exists) return;
    if (row >= rows || row < 0) return;
    if (col >= cols || col < 0) return;
    console.log(row, col, board[row][col], word[i]);
    if (boardUsed[row][col]) return;
    if (board[row][col] !== word[i] && i === 0)
      return check(
        col === cols - 1 ? row + 1 : row,
        col === cols - 1 ? 0 : col + 1,
        i,
      );

    if (board[row][col] !== word[i]) return;

    if (i === word.length - 1) exists = true;

    boardUsed[row][col] = true;

    check(row - 1, col, i + 1);
    check(row, col + 1, i + 1);
    check(row + 1, col, i + 1);
    check(row, col - 1, i + 1);

    boardUsed[row][col] = false;

    if (i === 0)
      check(
        col === cols - 1 ? row + 1 : row,
        col === cols - 1 ? 0 : col + 1,
        i,
      );
  }

  check(0, 0, 0);

  return exists;
}

console.log(
  "---- RESULT",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
  "true",
  "----\n",
);

console.log(
  "---- RESULT",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE",
  ),
  "true",
  "----\n",
);

console.log(
  "---- RESULT",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB",
  ),
  "flase",
  "----\n",
);

// console.log(
//   "---- RESULT",
//   exist(
//     [
//       ["a", "a", "b", "a", "a", "b"],
//       ["a", "a", "b", "b", "b", "a"],
//       ["a", "a", "a", "a", "b", "a"],
//       ["b", "a", "b", "b", "a", "b"],
//       ["a", "b", "b", "a", "b", "a"],
//       ["b", "a", "a", "a", "a", "b"],
//     ],
//     "bbbaabbbbbab",
//   ),
//   "flase",
//   "----\n",
// );
