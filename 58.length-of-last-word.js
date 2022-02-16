/*
Length of Last Word
Category	Difficulty	Likes	Dislikes
algorithms	Easy (36.44%)	646	56
Tags
Companies
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  s = s.replace(/\s+/g, ' ').trim();
  s = s.split(' ');
  const lastWord = s[s.length - 1];
  return lastWord.length;
}
const a=lengthOfLastWord( "   fly me   to   the moon  ")
console.log(a)
// @lc code=end
