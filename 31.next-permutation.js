/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let right = nums.length - 1,
    peek;
  while (right) {
    if (right === 0) peek = 0;
    if (nums[right] > nums[right - 1]) {
      peek = right;
      break;
    }
    right--;
  }
  if (peek === undefined) return nums.reverse();
  right = nums.length - 1;
  while (right) {
    if (nums[right] > nums[peek - 1]) {
      [nums[right], nums[peek - 1]] = [nums[peek - 1], nums[right]];
      break;
    }
    right--;
  }
  let start = peek,
    end = nums.length - 1;

  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

// @lc code=end
