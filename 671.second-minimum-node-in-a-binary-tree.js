/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function (root) {
  const numSet = new Set();

  const dfs = (node) => {
    if (!node) return;
    numSet.add(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };

  dfs(root);

  const res = [...numSet].sort((a, b) => a - b);

  return res.length > 1 ? res[1] : -1;
};
// @lc code=end
