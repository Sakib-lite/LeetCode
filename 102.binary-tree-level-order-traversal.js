/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function (root) {
  let result = [],
    queue = [];
    if(!root) return result;
  queue.push(root);
  while (queue.length) {
    let length = queue.length,
      currentLevelValue = [];
    count = 0;
    while (count < length) {
      let currentNode = queue.shift();
      currentLevelValue.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevelValue);
  }
  return result;
};
// @lc code=end
