/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k > s.length) return s.split('').reverse().join('');
    const str = s.split('');
    
    for (let i = 0; i < s.length; i += 2*k) {
        const reverse = str.splice(i, k).reverse();
        str.splice(i, 0, ...reverse);
    }
    
    return str.join('');
};
// @lc code=end

