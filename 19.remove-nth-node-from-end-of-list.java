/*
 * @lc app=leetcode id=19 lang=java
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        int length = 0;
        int count = 1;
        ListNode dummy = head;
        ListNode temp = head;
        ListNode prev = head;



        while (dummy != null) {
            length++;
            dummy = dummy.next;
        }

        if (length - n == 0) {
            return head.next;
        }

        while (count <= length - n) {
            prev = temp;
            temp = temp.next;
            count++;
        }
        prev.next = temp.next;

        return head;
    }
}
// @lc code=end
