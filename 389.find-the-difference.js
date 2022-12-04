/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const hash = {};

  for (let i = 0; i < s.length; i++) hash[s[i]] = hash[s[i]] + 1 || 1;

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return t[i];
    if (hash[t[i]] > 1) hash[t[i]] = hash[t[i]] - 1;
    else delete hash[t[i]];
  }
};

// @lc code=end
