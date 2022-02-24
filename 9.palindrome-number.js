/**
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let reverse = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    //    console.log(i)
    reverse = reverse * 10 + (i % 10);
    //  console.log(reverse );
  }

  return reverse === x;
};

isPalindrome(121);

// @lc code=end
