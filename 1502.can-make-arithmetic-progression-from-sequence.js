/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) return false;
  }
  return true;
};
// @lc code=end
