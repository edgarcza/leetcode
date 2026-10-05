function print(matrix: string[][]) {
  matrix.forEach((r) => console.log(r.join(" ")));
}

function maximalRectangle(matrix: string[][]): number {
  print(matrix);
  const height = matrix.length,
    width = matrix[0].length;

  function getArea(row: number, col: number) {
    let area = 0,
      maxWidth = width,
      maxHeight = height;
    for (let i = row; i < maxHeight; i++) {
      if (matrix[i][col] === "0") break;

      for (let j = col; j < maxWidth; j++) {
        if (matrix[i][j] === "0" || j === maxWidth - 1) {
          if (j === maxWidth - 1 && matrix[i][j] !== "0") j++;
          const newArea = (j - col) * (i - row + 1);
          console.log(row, col, `NewArea (${i}, ${j})`, newArea, area);
          if (newArea > area) area = newArea;
          maxWidth = j;
          break;
        }
      }
    }

    return area;
  }

  let maxArea = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === "1") {
        const a = getArea(i, j);
        console.log(`Area for ${i}, ${j} = ${a}`);
        if (a > maxArea) maxArea = a;
      }
    }
  }

  return maxArea;
}

console.log(
  "---- RESULT",
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ]),
  "6",
  "----\n",
);

console.log(
  "---- RESULT",
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "0", "1", "0"],
    ["0", "0", "0", "1", "0"],
    ["0", "0", "0", "1", "0"],
    ["0", "0", "0", "1", "0"],
    ["0", "0", "0", "1", "0"],
  ]),
  "7",
  "----\n",
);

console.log(
  "---- RESULT",
  maximalRectangle([
    ["1", "0", "1", "0", "0", "0", "0", "0", "0", "0"],
    ["1", "0", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "1", "0", "0", "0", "0", "0", "0"],
  ]),
  "8",
  "----\n",
);

console.log("---- RESULT", maximalRectangle([["0"]]), "0", "----\n");

console.log("---- RESULT", maximalRectangle([["1"]]), "1", "----\n");

console.log(
  "---- RESULT",
  maximalRectangle([
    ["1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "0", "0", "0"],
    ["0", "1", "1", "1", "1", "0", "0", "0"],
  ]),
  "21",
  "----\n",
);

console.log(
  "---- RESULT",
  maximalRectangle([
    ["1", "0", "1", "1", "1"],
    ["0", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "1"],
    ["1", "1", "0", "1", "1"],
    ["0", "1", "1", "1", "1"],
  ]),
  "6",
  "----\n",
);
