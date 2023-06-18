/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  strs.sort((a, b) => b.length - a.length);
  const shortestStr = strs.pop();
  let i = 0;
  for (i; i <= shortestStr.length; i++) {
    const prefix = shortestStr.substring(0, i + 1);
    let allMatch = true;
    for (const s of strs) {
      if (!s.startsWith(prefix)) {
        allMatch = false;
        break;
      }
    }
    if (!allMatch) break;
  }
  return shortestStr.substring(0, i);
};
// @lc code=end
