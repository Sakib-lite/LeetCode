/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let head = null;
  const dfs = (node) => {
    if(!node) return
    if (node.right) dfs(node.right);
    if (node.left) dfs(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };

 dfs(root);
  return head;
};
// @lc code=end
