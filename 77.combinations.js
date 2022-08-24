/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  const res = [];
  const dfs = (i, path) => {
    if (path.length === k) {
      res.push([...path]);
    }
    for (let j = i; j <= n; j++) {
      path.push(j);
      dfs(j + 1, path);
      path.pop();
    }
  };
  dfs(1, []);
  return res;
};

// @lc code=end
