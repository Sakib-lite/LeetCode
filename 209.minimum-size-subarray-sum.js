/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
let left=0,right=0,sum=0,count=0;

while(right <nums.length){

    sum+=nums[right];
console.log(sum);

while(sum>=target){

    let len=right-left+1
console.log(len);
sum-=nums[left];
console.log(sum);
left++

}


    right++
}





};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// @lc code=end
