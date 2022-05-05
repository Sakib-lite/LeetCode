/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; ++i) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; ++j) {
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }
  return result;
};
// @lc code=end
