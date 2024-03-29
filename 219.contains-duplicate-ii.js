/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(i - hash[nums[i]]) <= k) return true;
    hash[nums[i]] = i;
  }
  return false;
};
// @lc code=end
