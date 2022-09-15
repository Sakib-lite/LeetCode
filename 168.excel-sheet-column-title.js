/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let str = '';
  while (columnNumber) {
    let lastChar = columnNumber % 26;
    let remain = parseInt(columnNumber / 26);
    if (lastChar == 0) {
      lastChar = 26;
      remain -= 1;
    }

    str += String.fromCharCode(64 + lastChar);
    columnNumber = remain;
  }
  return str.split('').reverse().join('');
};
// @lc code=end
