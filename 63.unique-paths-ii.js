/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = null;
    }
  }

  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === null) break;
    obstacleGrid[0][i] = 1;
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === null) break;
    obstacleGrid[i][0] = 1;
  }

  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === null) continue;
      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
    }
  }

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};


// @lc code=end
