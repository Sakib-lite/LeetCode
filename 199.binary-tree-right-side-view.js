/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
const preorderDfs = function (node, currentLevel, result) {
  if (!node) return;
  if (currentLevel >= result.length) result.push(node.val);
  if (node.right) preorderDfs(node.right, currentLevel + 1, result);
  if (node.left) preorderDfs(node.left, currentLevel + 1, result);
};
var rightSideView = function (root) {
  let result = [];
  preorderDfs(root, 0, result);
  return result;
};
// @lc code=end
