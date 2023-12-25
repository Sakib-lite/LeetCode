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
  let maxZeros = 0;
  let sumOne = 0;
  let sumZero = 0;
  let len = s.length;

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === "0") sumZero++;
    else sumOne++;
    maxZeros = Math.max(maxZeros, sumZero - sumOne);
  }

  if (s[len - 1] === "1") sumOne++;
  return maxZeros + sumOne;
};
// @lc code=end
