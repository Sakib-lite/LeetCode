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

const permute = (str, combinations, res = '') => {
  if (!str.length) {
    combinations.push(res);
  }
  for (let i = 0; i < str.length; i++) {
    let remainingStr = str.substr(0, i) + str.substr(i + 1);
    permute(remainingStr, combinations, res + str.substr(i, 1));
  }
  return combinations;
};

var getPermutation = function (n, k) {
  let string = '';
  for (let i = 1; i <= n; i++) {
    i = i.toString();
    string += i;
  }
  const arr = [];
  permute(string, arr);
  return arr[k - 1];
};

// @lc code=end
