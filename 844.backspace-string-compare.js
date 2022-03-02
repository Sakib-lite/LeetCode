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

const removeBackspace = function (string) {
  const result = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== '#') result.push(string[p]);
    else result.pop();
  }
  return result;
};

var backspaceCompare = function (S, T) {
  const str1 = removeBackspace(S);
  const str2 = removeBackspace(T);
  if (str1.length !== str2.length) return false;
  else {
    for (let p = 0; p < str1.length; p++) {
      if (str1[p] !== str2[p]) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
