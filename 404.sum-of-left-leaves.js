/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  const dfs = (node, isLeft = false) => {
    if (!node) return;

    if (!node.left && !node.right && isLeft) {
      sum += node.val;
      return;
    }

    dfs(node.left, true);
    dfs(node.right, false);
  };

  dfs(root);
  return sum;
};
// @lc code=end
