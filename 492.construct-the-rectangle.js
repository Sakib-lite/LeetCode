/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let w = parseInt(Math.sqrt(area));
  while (!Number.isInteger(area / w)) w--;
  return [area / w, w];
};

// @lc code=end
