/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function (root) {
  const res = [];

  const dfs = (node, path) => {
    if (!node) return;

    if (!node.left && !node.right) {
      path += node.val;
      res.push(path);
    }

    dfs(node.left, path + node.val);
    dfs(node.right, path + node.val);
  };

  dfs(root, '');

  return res.reduce((acc, value) => acc + Number(value), 0);
};
// @lc code=end
