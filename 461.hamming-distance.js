/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let count = 0;
  x = x.toString(2).split('').reverse();
  y = y.toString(2).split('').reverse();

  const max = Math.max(x.length, y.length);

  for (let i = 0; i < max; i++) {
    let X = x[i] || '0';
    let Y = y[i] || '0';

    if (X !== Y) count++;
  }

  return count;
};
// @lc code=end
