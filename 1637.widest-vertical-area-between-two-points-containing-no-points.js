/*
 * @lc app=leetcode id=1637 lang=javascript
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);

  let max = 0;
  for (let i = 1; i < points.length; i++) {
    max = Math.max(max, points[i][0] - points[i - 1][0]);
  }
  return max;
};
// @lc code=end
