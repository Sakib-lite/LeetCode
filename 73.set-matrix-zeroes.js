/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        res.push([i, j]);
      }
    }
  }

  for (let coordinate of res) {
    const row = coordinate[0],
      col = coordinate[1];
    helper(matrix, row, col);
  }
};

const helper = (matrix, row, col) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
};

// @lc code=end
