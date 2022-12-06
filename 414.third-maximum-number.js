/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => a - b);
  const set = new Set(nums);

  if (set.size <= 2) return Math.max(...[...set]);
  return [...set][set.size - 3];
};
// @lc code=end
