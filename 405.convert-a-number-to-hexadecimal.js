/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num < 0) num = 0xffffffff + num + 1;
  return num.toString(16);
};
// @lc code=end
