/*
 * @lc app=leetcode id=102 lang=java
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        Map<Integer, List<Integer>> hashTable = new HashMap<>();

        if (root == null)
            return new ArrayList<>();

        hashTable.put(1, new ArrayList<>(List.of(root.val)));

        dfs(root.left, 2, hashTable);
        dfs(root.right, 2, hashTable);

        return new ArrayList<>(hashTable.values());

    }

    public void dfs(TreeNode node, int level, Map<Integer, List<Integer>> hashTable) {
        if (node == null)
            return;

        if (!hashTable.containsKey(level)) {
            hashTable.put(level, new ArrayList<>());
        }
        hashTable.get(level).add(node.val);

        dfs(node.left, level + 1, hashTable);
        dfs(node.right, level + 1, hashTable);
    }

}
// @lc code=end

