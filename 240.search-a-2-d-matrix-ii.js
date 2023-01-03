/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const last = matrix[0].length - 1;
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][last] < target) continue;

    for (start = 0; start < matrix[0].length; start++) {
        const end = matrix[row].length - 1 - start;
        
        if (matrix[row][start] === target || matrix[row][end] === target)
        return true;
        
      if (start >= end) break;
    }
  }
  return false;
};



// @lc code=end
