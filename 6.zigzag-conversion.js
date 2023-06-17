/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length < numRows || numRows <= 1) return s;

  const rows = [];
  let count = 0,
    reverse = false;
  for (let row = 0; row < numRows; row++) rows[row] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    rows[count].push(char);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) reverse = !reverse;
  }

  return rows.flat().join("");
};

// @lc code=end
