/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function (root) {
  const res = [];

  const dfs = (node, level = 0) => {
    if (!node) return;
    if (!res[level]) {
      res.push([]);
    }

    if (level % 2 === 0) res[level].push(node.val);
    else res[level].unshift(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root);
  return res;
};
// @lc code=end
