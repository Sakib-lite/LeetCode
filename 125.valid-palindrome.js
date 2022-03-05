/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.replace(/[^a-zA-Z0-9]/g, '',/\s/g,).toLowerCase()
   let reverse= s.split('').reverse().join('')
   if(s===reverse) return true
   return false
 
};
// @lc code=end

