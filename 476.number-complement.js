/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let binary = num.toString(2).split('');
  
  for (let i = 0; i < binary.length; i++) {
    binary[i] === '1' ? (binary[i] = '0') : (binary[i] = '1');
  }
  return Number.parseInt(binary.join(''), 2);
};

// @lc code=end
