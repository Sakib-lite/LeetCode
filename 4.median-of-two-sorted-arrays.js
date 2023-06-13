/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(mergedArr.length / 2);

  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
  }

  return mergedArr[mid];
};
// @lc code=end
