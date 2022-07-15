/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */

const lengthOfList = (head) => {
  let length = 0,
    node = head;
  while (node) {
    node = node.next;
    length++;
  }
  return length;
};

var rotateRight = function (head, k) {
  const length = lengthOfList(head);
  for (let i = 0; i < k % length; i++) {
    let newHead = new ListNode(),
      node = head,
      prev = head;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    if (length > 0) {
      prev.next = null;
      newHead.val = node.val;
      newHead.next = head;
      head = newHead;
    }
  }

  return head;
};
// @lc code=end
