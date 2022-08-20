/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function (n, k) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  let factorial = [1];
  for (let i = 1; i <= n; i++) factorial[i] = i * factorial[i - 1];

  let res = '';
  console.log(nums);
  for (let i = n; i > 0; i--) {
    index = Math.ceil(k / factorial[i - 1]);
    res += nums[index - 1];
    nums.splice(index - 1, 1);
    k -= factorial[i - 1] * (index - 1);
  }
  return res;
};
// @lc code=end
