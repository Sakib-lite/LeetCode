/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let currentPosition=1,start=head,currentNode=head
while(currentPosition<left){
  start=currentNode
  currentNode=currentNode.next;
  currentPosition++
}
let prev=null,tail=currentNode
while(currentPosition>=left && currentPosition<=right){
  let next=currentNode.next
  currentNode.next=prev
  prev=currentNode
  currentNode=next
  currentPosition++
}

start.next=prev
tail.next=currentNode
if(left > 1) {
  return head
} else {
  return prev;
}
};
// @lc code=end
