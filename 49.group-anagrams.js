/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const hash = {};
  for (let str of strs) {
    let letters = str.split('').sort().join('');

    if (hash[letters]) {
      hash[letters].push(str);
    } else {
      hash[letters] = [str];
    }
  }
  return Object.values(hash);
};
// @lc code=end
