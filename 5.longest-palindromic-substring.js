/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let longest = '';
  for(let i = 0; i < s.length; i++) {
      bubble(i, i); 
      bubble(i, i+1); 
  }
  function bubble(left, right) {
      while(left >= 0 && s[left] === s[right]) {
          left--;
          right++;
      }
      left++;
      right--;
      if(longest.length < right-left+1)  longest = s.slice(left, right+1)
  }
  return longest;
};
// @lc code=end
