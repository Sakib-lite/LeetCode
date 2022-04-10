/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right==undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root, depth = 0) {
  if (!root) return depth;
  depth++;
  let leftMax = maxDepth(root.left, depth);
  let rightMax = maxDepth(root.right, depth);
  return Math.max(leftMax, rightMax);
};
// @lc code=end
