/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let countNegative = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) return 0;
      if (nums[i] < 0) countNegative++;
    }
    if (countNegative % 2 === 0) return 1;
    return -1;
  };
// @lc code=end

