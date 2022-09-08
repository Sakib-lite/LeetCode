/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const n = s1.length + 2,
    m = s2.length + 2;

  if (m + n - 4 !== s3.length) return false;

  const dp = [...Array(s1.length + 1)]
    .map(() => Array(s2.length + 1))
    .fill(false);

  dp[1] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      let up = dp[j] && s1[i - 2] === s3[j + i - 3];
      let left = dp[j - 1] && s2[j - 2] === s3[j + i - 3];
      dp[j] = up || left;
    }
  }
  return dp[m - 1];
};

// @lc code=end
