/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const hash = {};
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    hash[char] = hash[char] + 1 || 1;
  }

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (hash[char]) {
      if (hash[char] === 1) delete hash[char];
      else hash[char] = hash[char] - 1;
    }
  }
  return Object.keys(hash).length === 0;
};
// @lc code=end
