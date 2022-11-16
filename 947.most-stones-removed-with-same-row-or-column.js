/*
 * @lc app=leetcode id=947 lang=javascript
 *
 * [947] Most Stones Removed with Same Row or Column
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const visited = new Set();
  let valid = 0;

  const dfs = (row, col) => {
    const key = `${row}-${col}`;
    if (visited.has(key)) return;
    visited.add(key);

    for (let [x, y] of stones) {
      if (row === x || col === y) dfs(x, y);
    }
  };

  for (let [x, y] of stones) {
    const key = `${x}-${y}`;
    if (visited.has(key)) continue;
    dfs(x, y);
    valid++;
  }

  return stones.length - valid;
};

// @lc code=end
