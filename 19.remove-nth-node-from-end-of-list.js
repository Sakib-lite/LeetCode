/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head,
    temp = head;
  for (let i = 0; i < n; i++) current = current.next;
  if (!current) return head.next;
  while (current.next) {
    current = current.next;
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
};

// @lc code=end
