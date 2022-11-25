/*
 * @lc app=leetcode id=907 lang=javascript
 *
 * [907] Sum of Subarray Minimums
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let res = 0;
  const mod = 1e9 + 7;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        res += min;
      } else res += min;
    }
  }

  return res % mod;
};

// @lc code=end
