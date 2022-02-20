/*

Sqrt(x)
Category	Difficulty	Likes	Dislikes
algorithms	Easy (36.24%)	3343	3016
Tags
math | binary-search

Companies
apple | bloomberg | facebook

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1

 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1;
  let right = x;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    if (mid * mid === x) return mid;
    else if (mid * mid > x) right = mid;
    else if (mid * mid < x) left = mid+1;
  }
  return left-1;
};


console.log(mySqrt(4));

/*  
1 2 3 4 5 6 7 8 9 10 
1 2 3 4 5

*/
// @lc code=end

