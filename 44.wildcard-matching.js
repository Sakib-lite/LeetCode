/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let string = 0,
    pattern = 0,
    starIndex = -1,
    pointer = -1;

  while (string < s.length) {
    if (
      (pattern < p.length && s[string] === p[pattern]) ||
      p[pattern] === '?'
    ) {
      string++;
      pattern++;
    } else if (pattern < p.length && p[pattern] === '*') {
      starIndex = pattern;
      pointer = string;
      pattern++;
    } else if (starIndex === -1) {
      return false;
    } else {
      pattern = starIndex+1;
      string = pointer+1;
      pointer = string;
    }
  }
  for (let i = pattern; i < p.length; i++) {
    if (p[i] !== '*') return false;
  }
  return true;
};

// @lc code=end
