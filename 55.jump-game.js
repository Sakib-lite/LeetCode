/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let targetIndex = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (targetIndex <= i + nums[i]) {
      targetIndex = i;
    }
  }
  return targetIndex === 0;
};

// @lc code=end
