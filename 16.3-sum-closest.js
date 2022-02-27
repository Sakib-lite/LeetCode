/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (nums === null || nums.length <= 2) return null;
  let result = nums[0] + nums[1] + nums[2];
  if (nums.length === 3) return result;
  for (let i = 0; i < nums.length - 2; i++) {
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      let sum = nums[i] + nums[p1] + nums[p2];
      if (sum > target) p2--;
      else p1++;
      if (Math.abs(target - sum) < Math.abs(target - result)) result = sum;
    }
  }
  return result;
};
// @lc code=end
