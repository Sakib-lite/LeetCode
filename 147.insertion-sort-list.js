/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  if (!head) return null;
  let sorted = head;
  head = head.next;

  sorted.next = null;

  while (head) {
    let prev = null;
    let node = sorted;

    while (node && node.val < head.val) {
      prev = node;
      node = node.next;
    }

    let temp = head;
    head = head.next;
    temp.next = node;
    if (prev) prev.next = temp;
    else sorted = temp;
  }

  return sorted;
};
// @lc code=end
