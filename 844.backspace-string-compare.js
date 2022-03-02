/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backspace = 2;
        while (backspace > 0) {
          p1--;
          backspace--;
          if (S[p1] === '#') backspace += 2;
        }
      }
      if (T[p2] === '#') {
        let backspace = 2;
        while (backspace > 0) {
          p2--;
          backspace--;
          if (T[p2] === '#') backspace += 2;
        }
      }
    } else {
      if (S[p1] !== T[p2]) return false;
      else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};
// @lc code=end
