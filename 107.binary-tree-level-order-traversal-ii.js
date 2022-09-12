/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
var levelOrderBottom = function (root) {
  const res = [];
  const dfs = (node, level = 0) => {
    if (!node) return;
    if (!res[level]) res.push([]);
    res[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root);
  return res.reverse();
};
// @lc code=end
