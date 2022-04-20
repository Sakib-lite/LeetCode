const INF = 2147483647;
const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const dfs = (grid, row, col, value) => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    value > grid[row][col]
  )
    return;

  grid[row][col] = value;
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    const nextRow = row + currentDir[0];
    const nextCol = col + currentDir[1];
    dfs(grid, nextRow, nextCol, value + 1);
  }
};

const wallAndGates = (grid) => {
  if (grid.length === 0) return 0;
  for (row = 0; row < grid.length; row++) {
    for (col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === GATE) dfs(grid, row, col, 0);
    }
  }
  return grid;
};

console.log(
  wallAndGates([
    [INF, -1, 0, INF],
    [INF, INF, INF, 0],
    [INF, -1, INF, -1],
    [0, -1, INF, INF],
  ])
);
/*
[ [ 3, -1, 0,  1 ],
  [ 2,  2, 1,  0 ],
  [ 1, -1, 2, -1 ],
  [ 0, -1, 3,  4 ] ]
*/

