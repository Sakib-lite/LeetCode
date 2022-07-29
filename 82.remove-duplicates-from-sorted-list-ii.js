/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;

  let dummy = new ListNode(-Infinity, head);

  let prev = dummy;
  let cur = head;
  let next = cur.next;

  while (cur) {
    if (cur && next && cur.val === next.val) {
      while (next && cur.val === next.val) {
        next = next.next;
      }

      prev.next = next;
      cur = next;
      next = next ? next.next : null;
    } else {
      prev = cur;
      cur = next;
      next = next ? next.next : null;
    }
  }

  return dummy.next;
};

// @lc code=end
