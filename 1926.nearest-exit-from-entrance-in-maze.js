/*
 * @lc app=leetcode id=1926 lang=javascript
 *
 * [1926] Nearest Exit from Entrance in Maze
 */

// @lc code=start
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var nearestExit = function (maze, entrance) {
  const m = maze.length,
    n = maze[0].length;
  const [ey, ex] = entrance;
  maze[ey][ex] = '+';

  const queue = [[ey, ex, 0]];
  while (queue.length) {
    const [y, x, step] = queue.shift();

    for (const [dy, dx] of dir) {
      const ny = y + dy,
        nx = x + dx,
        nextStep = step + 1;

      if (ny < 0 || ny >= m || nx < 0 || nx >= n) {
        continue;
      }
      if (maze[ny][nx] === '+') {
        continue;
      }

      if (ny === 0 || ny === m - 1 || nx === 0 || nx === n - 1) {
        return nextStep;
      }

      maze[ny][nx] = '+';
      queue.push([ny, nx, nextStep]);
    }
  }

  return -1;
};

// @lc code=end
