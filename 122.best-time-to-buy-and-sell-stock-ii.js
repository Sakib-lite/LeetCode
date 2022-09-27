/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let count = 0;

  while (count < prices.length) {
    if (prices[count] > prices[count - 1]) {
      profit = profit + prices[count] - prices[count - 1];
    }
    count++;
  }
  return profit;
};

// @lc code=end
