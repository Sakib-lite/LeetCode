/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum, res = [], path = []) {
  if (root) {
    path.push(root.val);
    if (!root.left && !root.right && targetSum - root.val === 0)
      res.push([...path]);
    pathSum(root.left, targetSum - root.val, res, path);
    pathSum(root.right, targetSum - root.val, res, path);
    path.pop();
  }

  return res;
};
// @lc code=end
