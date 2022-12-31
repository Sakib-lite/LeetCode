/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let res = [];

  const add = (index) => {
    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
      if (index === i) continue;
      temp *= nums[i];
    }
    return temp;
  };

  for (let i = 0; i < nums.length; i++) {
    res[i] = add(i);
  }
  return res;
};

// @lc code=end
