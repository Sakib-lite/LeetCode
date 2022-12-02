/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  const res = [];

  while (current) {
    res.push(current.val);
    current = current.next;
  }
  let left = 0,
    right = res.length - 1;

  while (left <= right) {
    if (res[left] !== res[right]) return false;
    left++;
    right--;
  }

  return true;
};
// @lc code=end
