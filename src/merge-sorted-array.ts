function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const list: number[] = [];
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (nums2[j] < nums1[i]) {
      list.push(nums2[j++]);
    } else {
      list.push(nums1[i++]);
    }
  }

  if (i < m) list.push(...nums1.slice(i, m));
  if (j < n) list.push(...nums2.slice(j, n));

  for (let k = 0; k < nums1.length; k++) {
    nums1[k] = list[k];
  }

  console.log(nums1);
}

console.log(
  "---- RESULT",
  merge([1, 2, 3, 6, 7, 9, 0, 0, 0, 0, 0], 6, [2, 4, 5, 5, 8], 5),
  "[1,2,2,3,4,5,5,6,7,8,9]",
  "----\n",
);

console.log(
  "---- RESULT",
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
  "[1,2,2,3,5,6]",
  "----\n",
);

console.log("---- RESULT", merge([1], 1, [], 0), "[1]", "----\n");
