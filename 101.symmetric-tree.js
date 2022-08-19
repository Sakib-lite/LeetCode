/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
const checkMirror = (firstNode, secondNode) => {
  if (firstNode === null && secondNode === null) return true;
  if (firstNode === null || secondNode === null) return false;
  if (firstNode.val !== secondNode.val) return false;

  return (
    checkMirror(firstNode.left, secondNode.right) &&
    checkMirror(firstNode.right, secondNode.left)
  );
};

var isSymmetric = function (root) {
  if (!root) return true;

  return checkMirror(root.left, root.right);
};
// @lc code=end
