/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let target = 0 - nums[i];
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (target > sum) left++;
      else if (target < sum) right--;
      else {
        arr.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--
      }
    }
  }
  return arr;
};
// @lc code=end
