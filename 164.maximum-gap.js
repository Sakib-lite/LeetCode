/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let max = 0;

  if (nums.length <= 1) return max;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = Math.abs(nums[i] - nums[i + 1]);
    max = Math.max(max, diff);
  }

  return max;
};

// @lc code=end
