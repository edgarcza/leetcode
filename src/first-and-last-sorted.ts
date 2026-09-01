function searchRange_(nums: number[], target: number): number[] {
  let min = -1,
    max = -1;

  function minMax(n: number) {
    if (max === -1 || n > max) max = n;
    else if (min === -1 || n < min) min = n;
  }

  function look(start: number, end: number) {
    console.log(nums.join("  "));

    while (start <= end) {
      const mid = Math.floor((end + start) / 2);
      console.log(
        `[${start}, ${mid}, ${end}]   ([${nums[start]}, ${nums[mid]}, ${nums[end]}])`,
      );

      if (nums[mid] === target) {
        minMax(mid);
        look(start, mid - 1);
        look(mid + 1, end);
      }

      if (target < nums[mid]!) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  look(0, nums.length - 1);

  return [min, max];
}

function searchRange(nums: number[], target: number): number[] {
  let start = 0,
    end = nums.length - 1;
  let res = [-1, -1];

  console.log(nums.join(" "));

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid]! < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  if (nums[start] !== target) return res;

  res[0] = start;

  end = nums.length - 1;

  console.log(start, end, " - ", nums.slice(start, end + 1).join(" "));
  while (start < end) {
    const mid = Math.ceil((start + end) / 2);

    console.log(mid);

    if (nums[mid]! > target) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }

  res[1] = end;

  return res;
}

console.log(
  "---- RESULT",
  searchRange([5, 7, 7, 8, 8, 8, 10, 11, 12], 8),
  "[3,5]",
  "----\n",
);

console.log(
  "---- RESULT",
  searchRange([5, 7, 7, 8, 8, 10, 11], 8),
  "[3,4]",
  "----\n",
);

console.log(
  "---- RESULT",
  searchRange([5, 7, 7, 8, 8, 10], 6),
  "[-1,-1]",
  "----\n",
);

console.log(
  "---- RESULT",
  searchRange([5, 7, 7, 8, 8, 10], 8),
  "[3,4]",
  "----\n",
);

console.log("---- RESULT", searchRange([], 0), "[-1,-1]", "----\n");
