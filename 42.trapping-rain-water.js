/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let totalWater = 0,
    left = 0,
    right = height.length - 1,
    maxLeft = 0,
    maxRight = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) maxLeft = height[left];
      else totalWater += maxLeft - height[left];
      left++;
    } else {
      if (height[right] >= maxRight) maxRight = height[right];
      else totalWater += maxRight - height[right];
      right--;
    }
  }
  return totalWater;
}
// @lc code=end
