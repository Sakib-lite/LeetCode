/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = board[0].length,
    col = board.length;

  for (let i = 0; i < col; i++) {
    let hashRow = {},
      hashCol = {},
      hashBox = {};
    for (let j = 0; j < row; j++) {
        
      const currentRow = board[i][j];
      const currentCol = board[j][i];
      const box =board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      
      const existingInRow = hashRow[currentRow];
      const existingInCol = hashCol[currentCol];
      const existingInBox = hashBox[box];
      
      if (existingInRow || existingInCol || existingInBox) return false;
      
      if (currentRow !== '.') hashRow[currentRow] = 1;
      if (currentCol !== '.') hashCol[currentCol] = 1;
      if (box !== '.') hashBox[box] = 1;
    }
  }
  return true;
};


// @lc code=end
