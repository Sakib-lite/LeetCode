/*
Implement strStr()
Category	Difficulty	Likes	Dislikes
algorithms	Easy (35.66%)	3552	3317
Tags
two-pointers | string

Companies
apple | facebook | microsoft | pocketgems

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 

Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack === needle) return 0;

  for (let i = 0; i <= haystack.length; i++) {
    console.log(i);
    if (needle === haystack.substring(i, i + needle.length)) {
      //i==2 > ll===ll >substring(2,2+2)
      return i;
    }
  }
  return -1;
};

const a = strStr('hello', 'll');
console.log(a);
// @lc code=end
