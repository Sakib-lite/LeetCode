/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function (head) {
  let res = [];
  let current = head;

  while (current) {
    res.push(current.val);
    current = current.next;
  }

  res = res.sort((a, b) => a - b);

  let newNode = new ListNode(-Infinity);
  let dummy = newNode;

  for (let i = 0; i < res.length; i++) {
    dummy.next = new ListNode(res[i]);
    dummy = dummy.next;
  }

  return newNode.next;
};
// @lc code=end
