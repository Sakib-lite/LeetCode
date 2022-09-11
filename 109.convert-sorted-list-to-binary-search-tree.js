/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const createTree = (array) => {
  if (array.length === 0) return null;
  const mid = Math.floor(array.length / 2);
  const root = new TreeNode(array[mid]);
  root.left = createTree(array.slice(0, mid));
  root.right = createTree(array.slice(mid + 1));

  return root;
};

var sortedListToBST = function (head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return createTree(arr);
};
// @lc code=end
