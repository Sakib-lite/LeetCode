/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let mid = start + parseInt((end - start) / 2);

    if (nums[mid] === nums[end]) end--;
    else if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid;
    } else {
      if (target > nums[mid] || target < nums[start]) start = mid + 1;
      else end = mid;
    }
  }
  return nums[start] === target;
};
// @lc code=end
