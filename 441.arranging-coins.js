/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let stairs = 0;

  while (stairs <= n) {
    n -= stairs;
    stairs++;
  }
  return stairs - 1;
};

// @lc code=end
