/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let zeros = 0;

  for (let i = 5; i <= n; i *= 5) zeros += Math.floor(n / i);

  return zeros;
};

// @lc code=end
