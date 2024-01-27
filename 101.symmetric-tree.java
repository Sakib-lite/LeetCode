/*
 * @lc app=leetcode id=101 lang=java
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {

        if (root == null)
            return false;

        return checkMirror(root.left, root.right);

    }

    public boolean checkMirror(TreeNode firstNode, TreeNode secondNode) {

        if (firstNode == null && secondNode == null)
            return true;
        if (firstNode == null || secondNode == null || firstNode.val != secondNode.val)
            return false;

        return checkMirror(firstNode.left, secondNode.right) && checkMirror(firstNode.right, secondNode.left);

    }

}
// @lc code=end
