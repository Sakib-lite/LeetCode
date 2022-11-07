/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let max = num;
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) === 6) {
      max = Math.max(max, Number(num.slice(0, i) + 9 + num.slice(i + 1)));
    }
  }
  return max;
};
// @lc code=end
