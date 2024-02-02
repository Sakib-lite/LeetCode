/*
 * @lc app=leetcode id=1679 lang=javascript
 *
 * [1679] Max Number of K-Sum Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const hashTable = {}
    let total = 0

    for (let i = 0; i < nums.length; i++) hashTable[nums[i]] = hashTable[nums[i]] + 1 || 1

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const remaining = k - current

        if (current == remaining && hashTable[current] == 1) continue
        if (hashTable[remaining] && hashTable[current]) {

        if (hashTable[current] > 1) hashTable[current] = hashTable[current] - 1
        else delete hashTable[current]


        if (hashTable[remaining] > 1) hashTable[remaining] = hashTable[remaining] - 1
        else delete hashTable[remaining]
            total++
        }
    }

    return total;
};
// @lc code=end

