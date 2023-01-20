/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(Infinity);

  memo[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    for (let j = coin; j <= amount; j++) {
      memo[j] = Math.min(memo[j], memo[j - coin] + 1);
    }
  }

  return memo[amount] === Infinity ? -1 : memo[amount];
};
// @lc code=end
