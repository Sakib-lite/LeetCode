/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) currentNode = currentNode.next;
    else {
      let childNode = currentNode.child;
      while (childNode.next !== null) {
        childNode = childNode.next;
      }
      childNode.next = currentNode.next;
      if (childNode.next !== null) childNode.next.prev = childNode;
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
};
// @lc code=end
