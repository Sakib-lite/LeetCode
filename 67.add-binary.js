/*
Add Binary
Category	Difficulty	Likes	Dislikes
algorithms	Easy (50.03%)	4579	509
Tags
math | string

Companies
facebook

Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const ln1 = a.length - 1;
  const ln2 = b.length - 1;
  let result = '';
  let carry = 0;
  const max = Math.max(ln1, ln2);

  for (let i = 0; i <= max; i++) {
    let val = 0;
    val = Number(a[ln1 - i] || 0) + Number(b[ln2 - i] || 0) + carry;
    result = (val % 2) + result; // 2-->0 0-->0 1-->1
    carry = Math.floor(val / 2); // 0--> 0  1-->0  2-->1
  }
  if (carry) result = 1 + result;
  return result;
}
console.log(addBinary('1010', '1011'));
// @lc code=end

// val=1 c=0 res='1'
// val=2 c=1 res='01'
// val=1 c=0 res='101'
// val=2 c=1 res='0101'

// res='10101'
