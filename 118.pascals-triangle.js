/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [[1]];
  if (numRows < 1) return [];
  if (numRows === 1) return triangle;

  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const currentRow = [];
    currentRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      currentRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }

  return triangle;
};

// @lc code=end
