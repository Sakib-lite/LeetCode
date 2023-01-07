/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = '';

  const reverse = (word) => {
    let str = '';
    for (let i = word.length - 1; i >= 0; i--) str += word[i];
    return str + ' ';
  };

  s = s.split(' ');

  for (let i = 0; i < s.length; i++) res += reverse(s[i]);

  return res.trim();
};

// @lc code=end
