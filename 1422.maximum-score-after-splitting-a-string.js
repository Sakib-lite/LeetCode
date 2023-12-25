/*
 * @lc app=leetcode id=1422 lang=javascript
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  let sumOne = 0;
  let sumZero = 0;

  for (let i = 0; i < s.length; i++) {
    sumOne += +s[i];
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") sumZero++;
    else sumOne--;
    max = Math.max(max, sumZero + sumOne);
  }
  return max;
};
// @lc code=end
