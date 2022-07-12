/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
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

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let p = pivotFunction(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
  return arr;
}

var sortColors = function (nums) {
  return (nums = quickSort(nums));
};
// @lc code=end
