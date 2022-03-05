/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0,
    charHashMap = {},
    left = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const existingChar = charHashMap[currentChar];
    if (existingChar >= left) left = existingChar + 1;
    charHashMap[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
// @lc code=end
