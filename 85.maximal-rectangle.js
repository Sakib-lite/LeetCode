/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalRectangle = function (matrix) {
  let maxArea = 0;
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  const dp = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (row === 0) dp[row][col] = matrix[row][col] === '1' ? 1 : 0;
      else dp[row][col] = matrix[row][col] == '1' ? dp[row - 1][col] + 1 : 0;

      let minHeight = dp[row][col];

      for (let i = col; i >= 0; i--) {
        if (minHeight === 0) continue;
        if (dp[row][i] < minHeight) minHeight = dp[row][i];
        maxArea = Math.max(maxArea, minHeight * (col - i + 1));
      }
    }
  }

  return maxArea;
};

// @lc code=end
