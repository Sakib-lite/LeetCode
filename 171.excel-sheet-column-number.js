/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const charCodeBase = 64;
  const n = columnTitle.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += (columnTitle.charCodeAt(i) - charCodeBase) * Math.pow(26, n - i - 1);
  }
  return res;
};

// @lc code=end
