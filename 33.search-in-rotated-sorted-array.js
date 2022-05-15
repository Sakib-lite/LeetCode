/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && nums[right] >= target) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};

// @lc code=end
