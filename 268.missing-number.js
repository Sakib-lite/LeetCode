/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let count = 0;
  nums = nums.sort((a, b) => a - b);
  while (count < nums.length) {
    if (nums[count] === count) count++;
    else return count;
  }
  return nums.length;
};

// @lc code=end
