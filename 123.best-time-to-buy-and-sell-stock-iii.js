/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const left = [],
    right = [],
    n = prices.length;
  let min =prices[0],
    profit = 0;

  left.push(0);
  for (let i = 1; i < n; i++) {
    min = Math.min(min, prices[i]);
    profit = prices[i] - min;
    left[i] = Math.max(left[i - 1], profit);
  }

  let max = prices[n - 1];
  right[n - 1] = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (prices[i] > max) max = prices[i];
    let profit = max - prices[i];
    right[i] = Math.max(right[i + 1], profit);
  }

  let maxProfit = 0;
  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, left[i] + right[i]);
  }

  return maxProfit;
};

// @lc code=end
