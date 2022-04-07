/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums=nums.sort((x, y) =>x-y)
    let j=nums.length-1-k;
let largest=nums[nums.length-1];
    for(let i=nums.length-1; i>j; i--){
largest=Math.min(largest,nums[i]);
}
return largest
};
// @lc code=end

