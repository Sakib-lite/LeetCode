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
var largestRectangleArea = function (heights) {
  let maxArea = 0,
    stack = [];
  heights = [0].concat(heights).concat([0]);

  for (let i = 0; i < heights.length; i++) {
    while (stack && heights[stack[stack.length - 1]] > heights[i]) {
      let bar = stack.pop();
      maxArea = Math.max(
        maxArea,
        heights[bar] * (i - stack[stack.length - 1] - 1)
      );
    }

    stack.push(i);
  }
  return maxArea;
};

var maximalRectangle = function (matrix) {
  let max = 0;
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Number(matrix[i][j]);
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[j][i] !== '0')
        matrix[j][i] = Number(matrix[j][i]) + Number(matrix[j - 1][i]);
    }
  }
  for (let i of matrix) {
    size = largestRectangleArea(i);
    max = Math.max(max, size);
  }
  return max;
};

// @lc code=end
