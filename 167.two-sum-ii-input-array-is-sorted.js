/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const hash = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (hash[num] >= 0) return [hash[num], i + 1];
    hash[target - num] = i + 1;
  }
  return null
};


// @lc code=end
