/*
 * @lc app=leetcode id=61 lang=java
 *
 * [61] Rotate List
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {

    public ListNode rotateRight(ListNode head, int k) {

        if (head == null) {
            return head;
        }

        ListNode dummy = head;
        int length = 0;

        while (dummy != null) {
            length++;
            dummy = dummy.next;
        }

        for (int i = 0; i < k % length; i++) {
            ListNode current = head;
            ListNode prev = head;
            ListNode newNode = new ListNode();

            while (current.next != null) {
                prev = current;
                current = current.next;
            }

            prev.next = null;
            newNode.val = current.val;
            newNode.next = head;
            head = newNode;
        }

        return head;
    }
}
// @lc code=end
