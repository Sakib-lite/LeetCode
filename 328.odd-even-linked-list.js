/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function (head) {
  let odd = [],
    even = [],
    current = head,
    index = 1;

  while (current) {
    if (index % 2 === 0) even.push(current.val);
    else odd.push(current.val);
    current = current.next;
    index++;
  }

  odd = odd.concat(even);
  const newNode = new ListNode(Infinity);
  let dummy = newNode;

  for (let i = 0; i < odd.length; i++) {
    dummy.next = new ListNode(odd[i]);
    dummy = dummy.next;
  }
  return newNode.next;
};
// @lc code=end
