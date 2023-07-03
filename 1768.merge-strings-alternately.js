/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let maxLen = Math.max(word1.length, word2.length);
  let str = "";
  for (let i = 0; i < maxLen; i++) {
    if (word1[i]) str += word1[i];
    if (word2[i]) str += word2[i];
  }
  return str;
};
// @lc code=end
