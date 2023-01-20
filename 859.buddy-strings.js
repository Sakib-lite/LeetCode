/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  let dif = [];
  let chars = new Set(s);

  for (let key in s) {
    if (s[key] !== goal[key]) dif.push([s[key], goal[key]]);
  }
  return (
    (dif.length == 2 && dif[0].join() == dif[1].reverse().join()) ||
    (dif.length == 0 && chars.size != s.length)
  );
};
// @lc code=end
