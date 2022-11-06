/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (board, words) {
  // Get the board rows and columns
  let rows = board.length;
  let res = [];
  if (!rows) return res;
  let columns = board[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const buildTrie = () => {
    const root = {};
    for (let word of words) {
      let cur = root;
      for (let alpha of word) {
        if (!cur[alpha]) cur[alpha] = {};
        cur = cur[alpha];
      }
      cur.word = word;
    }
    return root;
  };

  const trie = buildTrie();
  const compute = (node, x, y) => {
    if (node['word']) {
      res.push(node['word']);
      node['word'] = null;
    }
    if (x < 0 || y < 0 || x >= rows || y >= columns) return;
    if (node[board[x][y]] == null) return;
    else {
      const c = board[x][y];
      board[x][y] = '#';
      for (let [dx, dy] of directions) {
        compute(node[c], x + dx, y + dy);
      }
      board[x][y] = c;
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      compute(trie, row, col);
    }
  }

  return res;
};



// @lc code=end
