/*
 * @lc app=leetcode id=450 lang=java
 *
 * [450] Delete Node in a BST
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null)
            return null;

        if (root.val == key) {

            if (root.left == null && root.right == null)
                return null;
            if (root.right == null)
                return root.left;
            if (root.left == null)
                return root.right;

            TreeNode minRight = root.right;

            while (minRight.left != null) {
                minRight = minRight.left;
            }

            minRight.left = root.left;

            return root.right;

        }

        if (root.val < key)
            root.right = deleteNode(root.right, key);
        else
            root.left = deleteNode(root.left, key);

        return root;

    }
}
// @lc code=end
