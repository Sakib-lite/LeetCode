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
  const sortedWords = strs.sort((a, b) => b.length - a.length);
  const shortestStr = sortedWords.pop();
  let i = 0;
  for (i; i <= shortestStr.length; i++) {
    const prefix = shortestStr.substring(0, i + 1);
    if (!strs.every((s) => s.startsWith(prefix))) break;
  }
  return shortestStr.substring(0, i);
};
longestCommonPrefix(['flower', 'flow', 'flight']);
// @lc code=end
