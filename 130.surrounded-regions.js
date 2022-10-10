/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const helper = (board, i, j) => {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;

  if (board[i][j] === 'O') {
    board[i][j] = 'A';
    helper(board, i - 1, j);
    helper(board, i + 1, j);
    helper(board, i, j - 1);
    helper(board, i, j + 1);
  }
};

var solve = function (board) {

  if(!board) return null

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        row === 0 ||
        col === 0 ||
        row === board.length - 1 ||
        col === board[0].length - 1
      ) {
        helper(board, row, col);
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] == 'O') board[row][col] = 'X';
      else if (board[row][col] == 'A') board[row][col] = 'O';
    }
  }

};


// @lc code=end
