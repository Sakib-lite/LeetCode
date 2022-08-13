/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let count = 0,
    stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (stack.length === 1) stack[0] = i;
    else {
      stack.pop();
      count = Math.max(count, i - stack[stack.length - 1]);
    }
  }
  return count;
};

// @lc code=end
