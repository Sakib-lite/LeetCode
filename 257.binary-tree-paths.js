/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];

  const dfs = (node, path) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      path += node.val;
      res.push(path);
      return;
    }

    dfs(node.left, path + node.val + '->');
    dfs(node.right, path + node.val + '->');
  };

  dfs(root, '');
  return res;
};
// @lc code=end
