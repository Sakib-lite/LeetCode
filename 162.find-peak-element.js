/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return nums.indexOf(max);
};
// @lc code=end
