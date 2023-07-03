/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isPostive = x >= 0 ? true : false;
  let revNum = 0;
  x = Math.abs(x);
  while (x > 0) {
    const rem = x % 10;
    revNum = revNum * 10 + rem;
    x = Math.floor(x / 10);
  }

  revNum = isPostive ? revNum : -revNum;
  if (revNum > Math.pow(2, 31) - 1 || revNum < Math.pow(-2, 31)) return 0;

  return revNum;
};
// @lc code=end
