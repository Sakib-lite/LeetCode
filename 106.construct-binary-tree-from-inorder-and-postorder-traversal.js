/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  const val = postorder.pop();
  const root = new TreeNode(val);
  const index = inorder.indexOf(val);

  root.right = buildTree(inorder.slice(index + 1), postorder);
  root.left = buildTree(inorder.slice(0, index), postorder);

  return root;
};
// @lc code=end
