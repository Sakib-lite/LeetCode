/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */

const containsNodeDfs = (node, min, max) => {
  if (node.val <= min || node.val >= max) return false;
  if (node.left) {
    if (!containsNodeDfs(node.left, min, node.val)) return false;
  }
  if (node.right) {
    if (!containsNodeDfs(node.right, node.val, max)) return false;
  }
  return true;
};

var isValidBST = function (root) {
  if (!root) return true;
  return containsNodeDfs(root, -Infinity, Infinity);
};

// @lc code=end
