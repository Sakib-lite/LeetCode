/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return nums[i];
    hash[nums[i]] = true;
  }
  return null;
};
// @lc code=end
