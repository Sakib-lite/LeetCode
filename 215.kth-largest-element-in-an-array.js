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
  for (let i = pivot; i <= end; i++) {
    if (arr[i] < arr[pivot]) {
      swapIndex++;
      swapNumbers(arr, swapIndex, i);
    }
  }
  swapNumbers(arr, pivot, swapIndex);
  return swapIndex;
}
function quickSelect(arr, left, right, indexToFind) {
  if (left <= right) {
    let pivot = pivotFunction(arr, left, right);
    if (pivot === indexToFind) {
      return arr[indexToFind];
    } else if (indexToFind < pivot) {
      return quickSelect(arr, left, pivot - 1, indexToFind);
    } else {
      return quickSelect(arr, pivot + 1, right, indexToFind);
    }
  }
}
var findKthLargest = function (nums, k) {
  let j = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, j);
};
// @lc code=end
