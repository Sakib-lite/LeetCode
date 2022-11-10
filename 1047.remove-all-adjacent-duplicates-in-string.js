/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    if (res.length > 0 && res[res.length - 1] === s[i]) res.pop();
    else res.push(s[i]);
  }

  return res.join('');
};

// @lc code=end
