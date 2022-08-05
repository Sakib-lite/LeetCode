/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (!p) return !s;
  const isCharMatched = Boolean(s) && (p[0] === '.' || p[0] === s[0]);
  if (p[1] === '*') {
    return isMatch(s, p.slice(2)) || (isCharMatched && isMatch(s.slice(1), p));
  }
  return isCharMatched ? isMatch(s.slice(1), p.slice(1)) : false;
};
// @lc code=end
