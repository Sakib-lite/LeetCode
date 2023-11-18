/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i) + s.slice(0, i) === goal) return true;
  }

  return false;
};
// @lc code=end
