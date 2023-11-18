/*
 * @lc app=leetcode id=477 lang=javascript
 *
 * [477] Total Hamming Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    
    let total = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j=1;j<nums.length; j++) {

let first=Number(nums[i].toString(2))
let second=Number(nums[j].toString(2))
console.log(typeof first,first);

console.log(first,'-',second,'=',first-second);

}
    }




};

console.log(totalHammingDistance([4,14,2]));
// @lc code=end

