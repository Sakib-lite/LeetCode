/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const hash = {};
  s = s.split(' ');
  if (s.length !== pattern.length) return false;
  if (new Set(s).size !== new Set(pattern).size) return false;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!hash[pattern[i]]) hash[pattern[i]] = char;
    else {
      if (hash[pattern[i]] !== char) return false;
    }
  }
  return true;
};

// @lc code=end
