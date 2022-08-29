/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode();
  let right = new ListNode();
  let leftTail = left,
    rightTail = right;
  while (head) {
    if (head.val < x) {
      leftTail.next = head;
      leftTail = leftTail.next;
    } else {
      rightTail.next = head;
      rightTail = rightTail.next;
    }

    head = head.next;
  }
  leftTail.next = right.next;
  rightTail.next = null;
  return left.next;
};
// @lc code=end
