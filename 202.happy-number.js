/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

const calculateSquare = (n) => {
  n = n.toString().split('');
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += Math.pow(Number(n[i]), 2);
  }
  return total;
};

var isHappy = function (n) {
  const hash = {};

  while (n !== 1 && !hash[n]) {
    hash[n] = true;
    n = calculateSquare(n);
  }
  return n === 1 ? true : false;
};

// @lc code=end
