/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let sign = dividend < 0 !== divisor < 0 ? -1 : 1;
  if (divisor === 1) return dividend
  if (divisor === -1 && dividend > -1) return -dividend
  if (dividend === divisor) return 1;
  
    let quotient = 0;
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient++;
    }
    if (sign == -1) quotient = -quotient;
  
    if (quotient < -2147483648) return -2147483648;
    if (quotient > 2147483647) return 2147483647;
    return quotient;
  };
// @lc code=end

