function insert(intervals: number[][], newInterval: number[]): number[][] {
  console.log(intervals, "n: ", newInterval);

  if (intervals.length === 0) return [newInterval];
  const [newFrom, newTo] = newInterval;
  let inserted = false;

  // if (newInterval[1] >= intervals[0][0] && newInterval[1] <= intervals[0][1]) {
  //   intervals[0][0] = Math.min(newInterval[0], intervals[0][0]);
  // }

  // if (newInterval[0] <= intervals[0][0]) {
  //   intervals.unshift(newInterval);
  // }

  for (let i = 0; i < intervals.length; i++) {
    if (newFrom <= intervals[i][0]) {
      intervals.splice(i, 1, newInterval, intervals[i]);
      inserted = true;
      break;
    }
  }

  if (!inserted) intervals.push(newInterval);
  console.log("final", intervals);

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
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ),
  "[[1,5],[6,9]]",
  "----\n",
);

console.log(
  "---- RESULT",
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
  "[[1,2],[3,10],[12,16]]",
  "----\n",
);

console.log(
  "---- RESULT",
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [14, 23],
  ),
  "[[1,2],[3,10],[12,16]]",
  "----\n",
);

console.log("---- RESULT", insert([[1, 5]], [6, 8]), "[[1,5],[6,8]]", "----\n");

console.log("---- RESULT", insert([[1, 5]], [0, 3]), "[[0,5]]", "----\n");
