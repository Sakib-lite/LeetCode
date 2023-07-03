/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,max=0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) count = 0;
    else ++count;

    max=Math.max(count,max)

  }

  return max;
};
// @lc code=end
