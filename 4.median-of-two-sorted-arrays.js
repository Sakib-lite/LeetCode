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

function pivotFunction(arr, pivot = 0, right = arr.length - 1) {
  let swapIndex = pivot;
  for (let i = pivot + 1; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[pivot], arr[swapIndex]] = [arr[swapIndex], arr[pivot]];
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let p = pivotFunction(arr, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
  return arr;
}

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2];
  quickSort(arr, 0, arr.length - 1);
  if (arr.length % 2 === 0) {
    let mid = arr.length / 2;
    console.log(mid);
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    let mid = Math.floor(arr.length / 2);
    return arr[mid];
  }
};
// @lc code=end
