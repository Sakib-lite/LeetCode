/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.sort((a, b) => b + '' + a - (a + '' + b));
  return nums.join('').replace(/^0*/, '') || '0';
};

// @lc code=end
