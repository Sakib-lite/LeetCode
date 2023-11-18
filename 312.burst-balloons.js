/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const multiply = (arr) => {
  let res = arr[0];

  for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
  }
  console.log(res);
  return res;
};

var maxCoins = function (nums) {
  nums.sort((a, b) => b - a);
  console.log(nums);
  let max = 0;

  while (nums.length) {
    console.log(max);
    max += multiply(nums)
    nums.pop();
  }

  return max;
};
console.log(maxCoins([3, 1, 5, 8]));
// @lc code=end
