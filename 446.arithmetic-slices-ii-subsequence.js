/*
 * @lc app=leetcode id=446 lang=javascript
 *
 * [446] Arithmetic Slices II - Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    let n = nums.length
    let res = 0
    let dp = new Array(n).fill(0).map(() => new Map())
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j]
            let cur = dp[j].get(diff) || 0
            res += cur
            dp[i].set(diff, (dp[i].get(diff) || 0) + cur + 1)
        }
    }
    return res
};
// @lc code=end

