/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absence = 0,
    late = 0,
    count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") absence++;
    if (s[i] === "L") {
      ++count;
    } else count = 0;

    late = Math.max(late, count);
  }

  if (absence >= 2 || late >= 3) return false;
  return true;
};
// @lc code=end
