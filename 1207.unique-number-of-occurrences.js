/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] + 1 || 1;
  }
  const set = new Set();

  for (const val of Object.values(hash)) {
    if (set.has(val)) return false;
    set.add(val);
  }
  return true;
};

// @lc code=end
