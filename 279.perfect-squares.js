/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1, square = i ** 2; square <= n; i++, square = i ** 2) {
    for (let j = square; j <= n; j++) {
      dp[j] = Math.min(dp[j], 1 + dp[j - square]);
    }
  }

  return dp[n];
};

// @lc code=end
