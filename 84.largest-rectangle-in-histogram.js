/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0,
    stack = [];
  heights = [0].concat(heights).concat([0]);

  for (let i = 0; i < heights.length; i++) {
    while (stack && heights[stack[stack.length - 1]] > heights[i]) {
      let bar = stack.pop();
      maxArea = Math.max(  maxArea, heights[bar] * (i - stack[stack.length - 1] - 1) );
    }

    stack.push(i);
  }
  return maxArea;
};

// @lc code=end
