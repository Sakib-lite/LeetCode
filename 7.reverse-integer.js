/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverse = 0,
    lastDigit = 0;
  while (x !== 0) {
    lastDigit = x % 10;
    x = parseInt(x / 10);
    reverse = reverse * 10 + lastDigit;
  }
  if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) return 0;
  return reverse;
};
// @lc code=end
