/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  while (p1 < p2) {
    const h = Math.min(height[p1], height[p2]);
    const w = p2 - p1;
    const area = w * h;
    maxArea = Math.max(maxArea, area);
    if (height[p1] <= height[p2]) p1++
    else p2--
  }
  return maxArea;
};
// @lc code=end
