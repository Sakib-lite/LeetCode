/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const hash = {};
  let left = 0,
    right = -1,
    min = '';
  for (let i = 0; i < t.length; i++) hash[t[i]] = hash[t[i]] + 1 || 1;
  let count = Object.keys(hash).length;
  while (right <= s.length) {
    if (count === 0) {
      let current = s[left];
      if (hash[current] !== null) hash[current]++;
      if (hash[current] > 0) count++;
      let temp = s.substring(left, right + 1);
      if (min === '') min = temp;
      else min = min.length < temp.length ? min : temp;

      left++;
    } else {
      right++;
      const current = s[right];
      if (hash[current] !== null) hash[current]--;
      if (hash[current] === 0) count--;
    }
  }
  return min;
};
// @lc code=end
