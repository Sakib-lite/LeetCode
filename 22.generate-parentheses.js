/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  const helper = (leftP, rightP, str) => {
    if (leftP > rightP) return;
    if (!leftP && !rightP) res.push(str);
    if (leftP > 0) helper(leftP - 1, rightP, str + '(');
    if (rightP > 0) helper(leftP, rightP - 1, str + ')');
  };
  helper(n, n, '');
  return res;
};

// @lc code=end
