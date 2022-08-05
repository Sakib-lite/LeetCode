/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const existingPair = hashTable[current];
    if (existingPair) delete hashTable[current];
    else hashTable[nums[i]] = 1;
  }
  return Object.keys(hashTable)[0];
};
// @lc code=end
