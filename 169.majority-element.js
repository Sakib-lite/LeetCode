/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1;
    max = Math.max(max, hash[nums[i]]);
  }
  return Object.keys(hash).find((key) => hash[key] === max);
};
// @lc code=end
