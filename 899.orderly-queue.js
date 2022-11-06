/*
 * @lc app=leetcode id=899 lang=javascript
 *
 * [899] Orderly Queue
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  let str = s;
  if (k === 1) {
    const len = s.length;
    for (let i = 0; i < len; i++) {
      let firstChar = s[0];
      s = s.substring(1, len) + firstChar;
      if (s < str) str = s;
    }

    return str;
  }

  return s.split('').sort().join('');
};

// @lc code=end
