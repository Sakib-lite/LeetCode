/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const triangle = [[1]];
  for (let i = 1; i <= rowIndex; i++) {
    let prevRow = triangle[i - 1];
    let currentRow = [];
    currentRow.push(1);
    for (let j = 1; j < prevRow.length; j++) {
      currentRow[j] = prevRow[j] + prevRow[j - 1];
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }
  return triangle[rowIndex];
};
// @lc code=end
