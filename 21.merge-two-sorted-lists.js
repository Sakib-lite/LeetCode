/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var mergeTwoLists = function (list1, list2) {
  let newNode = new ListNode();
  const start = newNode;
  
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      newNode.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      newNode.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }
    newNode = newNode.next;
  }
  newNode.next = list1 ? list1 : list2;

  return start.next;
};
mergeTwoLists([1, 2, 4], [1, 3, 4]);

// @lc code=end
