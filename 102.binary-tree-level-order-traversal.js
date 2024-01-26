/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const hashTable = {};

  const dfs = (node, level) => {
    if (!node) return;

    if (!hashTable[level]) hashTable[level] = [];
    hashTable[level].push(node.val);

    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  };

  if (!root) return [];
  hashTable[1] = [root.val];

  if (root.left) dfs(root.left, 2);
  if (root.right) dfs(root.right, 2);

  return Object.values(hashTable);
};
// @lc code=end
