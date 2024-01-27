/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null;

    if (root.val === key) {

        if (!root.left && !root.right) return null
        if (!root.left) return root.right
        if (!root.right) return root.left


        let minRight = root.right
        while (minRight.left) {
            minRight = minRight.left
        }
        minRight.left = root.left
        return root.right
    }

    if (key < root.val) root.left = deleteNode(root.left, key)
    else root.right = deleteNode(root.right, key)

    return root
};
// @lc code=end

