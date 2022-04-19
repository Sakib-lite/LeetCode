/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const FRESH = 1,
  ROTTEN = 2,
  directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
  ];

var orangesRotting = function (grid) {
  if (grid.length === 0) return 0;

  let queue = [],
    freshOranges = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === ROTTEN) queue.push([row, col]);
      if (grid[row][col] === FRESH) freshOranges++;
    }
  }
  let minutes = 0,
    currentQueueSize = queue.length;
  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }
    const currentOrange = queue.shift();
    currentQueueSize--;
    const currentOrangeRow = currentOrange[0],
      currentOrangeCol = currentOrange[1];

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextCol = currentOrangeCol + currentDir[1],
        nextRow = currentOrangeRow + currentDir[0];

      if (
        nextRow < 0 ||
        grid.length <= nextRow ||
        nextCol < 0 ||
        grid[0].length <= nextCol
      )
        continue;
      if (grid[nextRow][nextCol] === FRESH) {
        grid[nextRow][nextCol] = ROTTEN;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  if (freshOranges !== 0) return -1;
  return minutes;
};

// @lc code=end
