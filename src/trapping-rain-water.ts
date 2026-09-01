function printBarChart(values: number[]): void {
  const maxValue = Math.max(...values);

  for (let level = maxValue; level >= 1; level--) {
    console.log(
      values.map((value) => (value >= level ? "██" : "  ")).join(" "),
    );
  }

  console.log(values.map(() => "──").join("─"));
  console.log(values.map((_, index) => String(index).padStart(2)).join(" "));
}

function trap(heights: number[]): number {
  printBarChart(heights);
  let left = 0,
    right = heights.length - 1;
  let maxLeft = 0,
    maxRight = 0;
  let units = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] > maxLeft) {
        maxLeft = heights[left];
      } else {
        units += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] > maxRight) {
        maxRight = heights[right];
      } else {
        units += maxRight - heights[right];
      }
      right--;
    }
  }

  return units;
}

console.time();
console.log(
  "---- RESULT",
  trap([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
  "6",
  "----\n",
);
console.log(
  "---- RESULT",
  trap([1, 11, 9, 4, 10, 14, 3, 0, 3, 1, 5]),
  "6",
  "----\n",
);

console.log("---- RESULT", trap([4, 2, 0, 3, 2, 5]), "9", "----\n");

console.log("---- RESULT", trap([4, 2, 3]), "1", "----\n");

console.timeEnd();
