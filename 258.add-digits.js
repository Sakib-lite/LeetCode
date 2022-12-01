/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num > 9) {
    num = num.toString().split('');

    let n = 0;
    for (let i = 0; i < num.length; i++) {
      n += Number(num[i]);
 
    }
    num = n;
  }

  return num;
};

// @lc code=end
