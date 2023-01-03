/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const res = new Array(n);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (res[i]) continue;
    count++;
    for (let mul = i * i; mul < n; mul += i) {
      res[mul] = 1;
    }
  }

  return count;
};

// @lc code=end
