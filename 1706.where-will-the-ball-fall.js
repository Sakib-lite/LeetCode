/*
 * @lc app=leetcode id=1706 lang=javascript
 *
 * [1706] Where Will the Ball Fall
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 const dfs = (grid, row,col) => {

  if(grid[row]===undefined) return col
  
  if(grid[row][col]===-1 && (grid[row][col-1]===1 || grid[row][col-1]===undefined) ) return -1
  if(grid[row][col]===1 && (grid[row][col+1]===-1 || grid[row][col+1]===undefined) ) return -1
  
  
  if(grid[row][col]===1) return dfs(grid,row+1,col+1)
  else return dfs(grid,row+1,col-1)
  
  };
  
  var findBall = function (grid) {
    const res = [];
  
    for (let ball = 0; ball < grid[0].length; ball++) {
       res.push(dfs(grid,0,ball))
    }
  return res
  };
// @lc code=end

