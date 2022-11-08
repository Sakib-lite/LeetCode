/*
 * @lc app=leetcode id=1544 lang=javascript
 *
 * [1544] Make The String Great
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let toggle = true;

  while (toggle) {
    toggle = false;

    for (let i = 0; i < s.length; i++) {
      if (
        i < s.length-1 &&
        s[i].toLowerCase() === s[i + 1].toLowerCase() &&
        s[i] !== s[i + 1]
      ) {
        s = s.slice(0, i) + s.slice(i + 2);
        toggle = true;
      }
    }
  }
  return s;
};
// @lc code=end
