/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  while (n % 2 === 0) n /= 2;
  if (n === 1) return true;
  return false;
};
// @lc code=end
