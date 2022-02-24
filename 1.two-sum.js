/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsHashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const currentMapValue = numsHashTable[nums[i]];
    if (currentMapValue>=0) return [currentMapValue, i];
    const numsToFind = target - nums[i];
    numsHashTable[numsToFind] = i;
  }
  return null;
};
// @lc code=end
