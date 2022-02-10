/**
 * 
 * Palindrome Number
Category	Difficulty	Likes	Dislikes
algorithms	Easy (52.10%)	5102	2019
Tags
Companies
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
 */
/*
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
