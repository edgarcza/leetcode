function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    const [prevFrom, prevTo] = intervals[i - 1];
    const [from, to] = intervals[i];

    if (from <= prevTo) {
      intervals[i] = [prevFrom, to > prevTo ? to : prevTo];
      intervals.splice(i - 1, 1);
      i--;
    }
  }

  return intervals;
}

console.log(
  "---- RESULT",
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  "[[1,6],[8,10],[15,18]]",
  "----\n",
);

console.log(
  "---- RESULT",
  merge([
    [1, 3],
    [2, 6],
    [5, 10],
    [11, 18],
    [12, 19],
  ]),
  "[[1,10],[11,19]]",
  "----\n",
);

console.log(
  "---- RESULT",
  merge([
    [1, 4],
    [4, 5],
  ]),
  "[[1,5]]",
  "----\n",
);

console.log(
  "---- RESULT",
  merge([
    [4, 7],
    [1, 4],
  ]),
  "[[1,7]]",
  "----\n",
);

console.log(
  "---- RESULT",
  merge([
    [1, 4],
    [2, 3],
  ]),
  "[[1,4]]",
  "----\n",
);
