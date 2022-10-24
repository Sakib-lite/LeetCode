/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candy = 1;
  let dp = [];

  for (let i = 0; i < ratings.length; i++) {
    let current = ratings[i];
    let left = ratings[i - 1];

    if (current > left) candy += 1;
    else candy = 1;

    dp[i] = candy;
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    let current = ratings[i];
    let right = ratings[i + 1];

    if (current > right) candy += 1;
    else candy = 1;
    dp[i] = Math.max(dp[i], candy);
  }
  return dp.reduce((acc, val) => acc + val, 0);
};

// @lc code=end
