/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
 * @return {number}
 */

const binaryTree = function (node, arr) {
  let temp = node;
  arr.push(temp.val);
  if (temp.left) binaryTree(temp.left,arr);
  if (temp.right) binaryTree(temp.right,arr);
};

var countNodes = function (root) {
  if (!root) return 0;
  let result = [];
  binaryTree(root, result);
  return result.length;
};
// @lc code=end
