/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reverse = '';
  s = s.split(' ');

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == '') continue;
    reverse += s[i] + ' ';
  }

  return reverse.trim();
};

// @lc code=end
