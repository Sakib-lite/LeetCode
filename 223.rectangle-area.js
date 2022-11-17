/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const area1 = (ax2 - ax1) * (ay2 - ay1);
  const area2 = (bx2 - bx1) * (by2 - by1);

  const leftB = Math.max(ax1, bx1),
    bottomB = Math.max(ay1, by1),
    rightB = Math.min(ax2, bx2),
    topB = Math.min(ay2, by2);

  let overlappedArea = 0;

  if (leftB < rightB && bottomB < topB) {
    overlappedArea = (rightB - leftB) * (topB - bottomB);
  }

  return area1 + area2 - overlappedArea;
};

// @lc code=end
