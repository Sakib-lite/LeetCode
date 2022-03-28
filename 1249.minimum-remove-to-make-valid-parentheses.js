/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let arr = s.split('');
  const existingPair = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current === '(') existingPair.push(i);
    else if (current === ')' && existingPair.length) existingPair.pop();
    else if (current === ')') arr[i] = '';
  }
  while (existingPair.length) {
    const rm = existingPair.pop();
    arr[rm] = '';
  }
  return arr.join('');
};
// @lc code=end
