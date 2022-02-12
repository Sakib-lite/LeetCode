/*
Valid Parentheses
Category	Difficulty	Likes	Dislikes
algorithms	Easy (40.61%)	11215	474
Tags
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = { '(': ')', '{': '}', '[': ']' };

  const arr = s.toString().split('');
  let existingPair = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]; //1.(   2.)

    if (brackets[current]) existingPair.push(current);
    //'(' key
    else {
      const checkBracket = existingPair.pop();

      if (brackets[checkBracket] != current) return false; //'(' === ')'
    }
    //in true condition existingPair array will be empty []
  }
  
  if (existingPair.length > 0) return false;

  return true;
};
isValid('()');
// @lc code=end
