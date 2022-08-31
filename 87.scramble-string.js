/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

 const helper = function (s1, s2, map) {    
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    if (s1.length === 0 || s2.length === 0) return true;
    const key = s1 + s2;
    if (key in map) return !!map[key];

    let result = false;
    let xorFW = 0;
    let xorBW = 0;

    for (var i = 0, j = s1.length - 1, iPlus = 1; i < s1.length - 1; i++, j--, iPlus++) {
        xorFW ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
        xorBW ^= s1.charCodeAt(i) ^ s2.charCodeAt(j);

        if (xorFW === 0 &&
            helper(s1.substring(0, iPlus), s2.substring(0, iPlus), map) &&
            helper(s1.substring(iPlus), s2.substring(iPlus), map)) {
            result = true;
            break;
        }

        if (xorBW === 0 &&
            helper(s1.substring(0, iPlus), s2.substring(s1.length - iPlus), map) &&
            helper(s1.substring(iPlus), s2.substring(0, s1.length - iPlus), map)) {
            result = true;
            break;
        }
    }

    map[key] = result;
    map[s2 + s1] = result;
    return result;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function (s1, s2) {
    return helper(s1, s2, {});
};

// @lc code=end
