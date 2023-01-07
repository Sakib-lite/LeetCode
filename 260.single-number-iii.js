/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) delete hash[nums[i]];
    else hash[nums[i]] = 1;
  }
  let res = [];
  for (let key in hash) res.push(parseInt(key));
  return res;
};
// @lc code=end
