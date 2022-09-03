/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
const helper = (count, n) => {
  if (count > n) return [null];

  const res = [];

  for (let root = count; root <= n; root++) {
    for (let left of helper(count, root - 1)) {
      for (let right of helper(root + 1, n)) {
        const tree = new TreeNode(root);
        tree.left = left;
        tree.right = right;
        res.push(tree);
      }
    }
  }
  return res;
};

var generateTrees = function (n) {
  return helper(1, n);
};

// @lc code=end
