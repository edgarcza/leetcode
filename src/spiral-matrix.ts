function format(n: number[]) {
  return n.join(",");
}

function spiralOrder(matrix: number[][]): number[] {
  const spiral: number[] = [];
  let x = 0,
    y = 0;
  let xl = matrix[0].length,
    yl = matrix.length;
  let spins = 0;

  while (spiral.length < xl * yl) {
    while (x < xl - spins) {
      spiral.push(matrix[y][x]);

      if (x < xl - spins - 1) x++;
      else break;
    }
    y++;

    if (spiral.length === xl * yl) break;

    while (y < yl - spins) {
      spiral.push(matrix[y][x]);

      if (y < yl - spins - 1) y++;
      else break;
    }
    x--;

    if (spiral.length === xl * yl) break;

    while (x >= 0 + spins) {
      spiral.push(matrix[y][x]);

      if (x >= 0 + spins + 1) x--;
      else break;
    }
    y--;

    if (spiral.length === xl * yl) break;

    while (y > spins) {
      spiral.push(matrix[y][x]);
      if (y > spins + 1) y--;
      else break;
    }
    spins++;
    x = 0 + spins;
  }

  return spiral;
}

console.log(
  "---- RESULT",
  format(
    spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ),
  "\n\t[1,2,3,6,9,8,7,4,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  format(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]),
  ),
  "\n\t[1,2,3,4,8,12,11,10,9,5,6,7]",
  "----\n",
);

console.log(
  "---- RESULT",
  format(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]),
  ),
  "\n\t[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]",
  "----\n",
);

console.log(
  "---- RESULT",
  format(spiralOrder([[1, 2, 3]])),
  "\n\t[1,2,3]",
  "----\n",
);

console.log(
  "---- RESULT",
  format(spiralOrder([[1], [2], [3]])),
  "\n\t[1,2,3]",
  "----\n",
);
