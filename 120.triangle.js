/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = [];

  for (let row of triangle) dp.push(new Array(row.length).fill(0));

  dp[0] = triangle[0];

  for (let row = 1; row < dp.length; row++) {
    for (let col = 0; col < dp[row].length; col++) {


      if (col == 0) {

        dp[row][col] = dp[row - 1][col] + triangle[row][col];
     
    } else if (col === dp[row].length - 1) {

        dp[row][col] = dp[row - 1][col - 1] + triangle[row][col];

      } else {

        dp[row][col] =  Math.min(dp[row - 1][col], dp[row - 1][col - 1]) + triangle[row][col];
      }

    }
  }
  return Math.min(...dp[dp.length - 1]);
};

// @lc code=end
