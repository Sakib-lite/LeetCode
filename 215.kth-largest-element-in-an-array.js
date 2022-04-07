/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swapNumbers(arr, first, second) {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function pivotFunction(arr, pivot = 0, end = arr.length - 1) {
  let swapIndex = pivot;
  for (let i = pivot + 1; i <= end; i++) {
    swapIndex++;
    swapNumbers(arr, i, swapIndex, i);
  }
  return swapIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotFunction(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}
var findKthLargest = function (nums, k) {
  nums = nums.sort((x, y) => x - y);
  let arr = quickSort(nums);
  let j = nums.length - 1 - k;
  let largest = nums[nums.length - 1];
  for (let i = nums.length - 1; i > j; i--) {
    largest = Math.min(largest, nums[i]);
  }
  return largest;
};
// @lc code=end
