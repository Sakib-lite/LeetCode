/*
 * @lc app=leetcode id=2091 lang=javascript
 *
 * [2091] Removing Minimum and Maximum From Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  if (nums.length < 2) return nums.length;

  let minIndex = 0,
    maxIndex = 0,
    temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
    if (nums[i] < nums[minIndex]) minIndex = i;
  }

  if (minIndex > maxIndex) {
    temp = minIndex;
    minIndex = maxIndex;
    maxIndex = temp;
  }

  return (
    Math.min(maxIndex + 1, nums.length - minIndex,
    minIndex + 1 + nums.length - maxIndex
  ))
};




// @lc code=end
