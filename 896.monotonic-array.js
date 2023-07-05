/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let isPositive = null;
  
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] === nums[i]) continue;
      if (isPositive === null)
        isPositive = nums[i + 1] - nums[i] > 0 ? true : false;
  
      if (isPositive && nums[i + 1] - nums[i] < 0) return false;
      if (!isPositive && nums[i + 1] - nums[i] > 0) return false;
    }
    return true;
  };
// @lc code=end

