/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const isValid = (num, row, col, board) => {
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;
    const curRow = boxRow + Math.floor(i / 3);
    const curCol = boxCol + Math.floor(i % 3);
    if (board[curRow][curCol] === num) return false;
  }
  return true;
};

var solveSudoku = function (board) {
  const digits = {
    0: '1',
    1: '2',
    2: '3',
    3: '4',
    4: '5',
    5: '6',
    6: '7',
    7: '8',
    8: '9',
  };
  const emptyCells = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') emptyCells.push({ row: i, col: j });
    }
  }

  const traverse = (index) => {
    if (index >= emptyCells.length) return true;

    const { row, col } = emptyCells[index];
    for (let i = 0; i < 9; i++) {
      const digit = digits[i];
      if (isValid(digit, row, col, board)) {
        board[row][col] = digit;
        if (traverse(index + 1)) return true;
        board[row][col] = '.'; //backtrack
      }
    }
    return false;
  };
  traverse(0);
};

// @lc code=end
