/*

Longest Common Prefix
Category	Difficulty	Likes	Dislikes
algorithms	Easy (38.84%)	6891	2786
Tags
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  const sortedWords = strs.sort((a, b) => b.length - a.length);
  const shortestStr = sortedWords.pop();
  let i = 0;
  for (i; i <= shortestStr.length; i++) {
    const prefix = shortestStr.substring(0, i + 1);
    if (!strs.every((s) => s.startsWith(prefix))) break;
  }
  return shortestStr.substring(0, i);
};
longestCommonPrefix(['flower', 'flow', 'flight']);
// @lc code=end
