/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substring(1).toLowerCase()
  );
};
// @lc code=end
