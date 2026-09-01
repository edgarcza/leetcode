function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums: number[] = [];
  let i = 0;
  let n1 = 0;
  let n2 = 0;

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1]! <= nums2[n2]!) {
      nums[i++] = nums1[n1++]!;
    } else {
      nums[i++] = nums2[n2++]!;
    }
  }

  while (n1 < nums1.length) nums[i++] = nums1[n1++]!;
  while (n2 < nums2.length) nums[i++] = nums2[n2++]!;

  const mid = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return (nums[mid - 1]! + nums[mid]!) / 2;
  } else {
    return nums[mid]!;
  }
}

console.log("\n - - - Result", findMedianSortedArrays([1, 2], [3, 4]));
console.log("\n - - - Result", findMedianSortedArrays([1, 3], [2]));
