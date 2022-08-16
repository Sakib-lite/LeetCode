/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length - 1,
    cur = -1,
    next = 0,
    step = 0;

  for (let i = 0; next < len; i++) {
    if (i > cur) {
      step++;
      cur = next;
    }
    next = Math.max(next, i + nums[i]);
  }

  return step;
};
// @lc code=end
