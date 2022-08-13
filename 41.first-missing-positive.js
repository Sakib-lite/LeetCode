/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] === nums[i + 1]) continue;
    if (count !== nums[i]) return count;
    count++;
  }
  return count++;
};
// @lc code=end
