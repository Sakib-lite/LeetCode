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
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let charHashMap = {},
      currentLength = 0;
    for (let j = i; j < s.length; j++) {
      let currentChar = s[j];
      if (!charHashMap[currentChar]) {
        currentLength++;
        charHashMap[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else break;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
// @lc code=end
