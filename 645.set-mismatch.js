/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const numSet = [...new Set(nums)];
  const max = Math.max(...nums);
  const total = (max * (max + 1)) / 2;
  const missing = total - numSet.reduce((sum, acc) => sum + acc, 0);

  return [
    nums.find((elem, i) => nums.indexOf(elem) !== i),
    missing === 0 ? max + 1 : missing,
  ];
};
// @lc code=end
