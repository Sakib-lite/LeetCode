/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
 let generateMatrix = function(n) {
  let matrix = []
  for(let i=0;i<n;i++) {
      matrix.push(new Array(n))
  }
  fill(matrix, 0,0, n, 1)
  return matrix
};

let fill = function(matrix, x,y , length, startNum) {
  
  if(length <= 0) {
      return 
  }
  matrix[x][y] = startNum
  
  // top 
  for(let i=0;i<length-1;i++) {
      matrix[x][y+i] = startNum
      startNum = startNum + 1
  }
  
  // right
  for(let i=0;i<length-1;i++) {
      matrix[x+i][y+length-1] = startNum
      startNum = startNum + 1
  }
  
  // bottom
  for(let i=length-1;i>0;i--) {
      matrix[x+length-1][y+i] = startNum
      startNum = startNum + 1
  }
  
  // left
  for(let i=length-1;i>0;i--) {
      matrix[x+i][y] = startNum
      startNum = startNum + 1
  }
  fill(matrix, x+1,y+1 , length-2, startNum)
};

// @lc code=end
