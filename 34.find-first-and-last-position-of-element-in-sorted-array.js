/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let val = nums[mid];
    if (val === target) return mid;
    else if (val < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  let firstMid = binarySearch(nums, 0, nums.length - 1, target);
  if (firstMid === -1) return [-1, -1];
  let startPos = firstMid,
    endPos = firstMid,
    temp1,
    temp2;
  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;
  return [startPos, endPos];
};
// @lc code=end
