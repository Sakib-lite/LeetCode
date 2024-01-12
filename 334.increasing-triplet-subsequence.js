/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current > second && current > first) return true;

    if (current > first) second = current;
    else first = current;
  }

  return false;
};

// @lc code=end
