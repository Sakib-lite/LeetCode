/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const catalan = (n) => {
  const memo = new Array(n + 1).fill(0);
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      memo[i] += memo[j] * memo[i - j - 1];
    }
  }
  return memo[n];
};

var numTrees = function (n) {
  return catalan(n);
};
// @lc code=end
