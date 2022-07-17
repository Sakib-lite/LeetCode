/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rowNum = board.length,
    columnNum = board[0].length;

  const dfs = (row, col, i) => {
    if (i === word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= rowNum ||
      col >= columnNum ||
      word[i] !== board[row][col]
    )
      return false;

    const char = board[row][col];
    board[row][col] = '-';
    const result =
      dfs(row - 1, col, i + 1) ||
      dfs(row, col + 1, i + 1) ||
      dfs(row + 1, col, i + 1) ||
      dfs(row, col - 1, i + 1);
    board[row][col] = char;
    return result;
  };

  for (let j = 0; j < rowNum; j++) {
    for (let k = 0; k < columnNum; k++) {
      if (dfs(j, k, 0)) return true;
    }
  }

  return false;
};

// @lc code=end
