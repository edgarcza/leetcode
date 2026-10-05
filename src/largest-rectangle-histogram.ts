function printHistogram(heights: number[]): void {
  const maxHeight = Math.max(...heights);

  for (let row = maxHeight + 1; row > 0; row--) {
    console.log(
      heights
        .map((height) =>
          height >= row ? "██" : height + 1 === row ? ` ${height}` : "  ",
        )
        .join("  "),
    );
  }
}

function largestRectangleArea(heights: number[]): number {
  printHistogram(heights);
  heights.push(0);
  let max = 0,
    stack: number[] = [];

  for (let r = 0; r < heights.length; r++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[r]) {
      const curr = stack.pop()!;
      const l = stack[stack.length - 1] ?? -1;

      const a = (r - l - 1) * heights[curr];

      console.log(
        `${heights[l] ?? -1} - ${heights[curr]} - ${heights[r]}. Area: ${a}`,
      );

      if (a > max) max = a;
    }

    stack.push(r);
  }

  return max;
}

console.log(
  "---- RESULT",
  largestRectangleArea([5, 3, 3, 2, 9, 1, 3, 6, 5, 4, 6, 2, 3, 4]),
  "10",
  "----\n",
);

console.log(
  "---- RESULT",
  largestRectangleArea([2, 1, 5, 6, 2, 3]),
  "10",
  "----\n",
);

console.log("---- RESULT", largestRectangleArea([2, 4]), "4", "----\n");
