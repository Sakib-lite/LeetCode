/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s === null || s.length === 0) return 0;
  if (s[0] === '0') return 0;
  const memo = new Array(s.length + 1).fill(0);
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    const lastDigit = Number(s.slice(i - 1, i));
    if (lastDigit >= 1 && lastDigit <= 9) {
      memo[i] += memo[i - 1];
    }

    const firstTwoDigit = Number(s.slice(i - 2, i));

    if (firstTwoDigit >= 10 && firstTwoDigit <= 26) {
      memo[i] += memo[i - 2];
    }
  }
  return memo[s.length];
};

// @lc code=end
