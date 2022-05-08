/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeFunc = (list1, list2) => {
  const newNode = new ListNode(0);
  let prev = newNode;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
   if (!list1) prev.next = list2;
    if (!list2) prev.next = list1;
    return newNode.next;
};

var mergeKLists = function (lists) {
    if(!lists || !lists.length) return null;
  while (lists.length > 1) {
    let a = lists.pop();
    let b = lists.pop();
    let mergedList = mergeFunc(a, b);
    lists.push(mergedList);
  }
  return lists[0];
};
// @lc code=end
