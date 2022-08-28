/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const dfs = (count, path) => {
    res.push([...path]);
    for (let i = count; i < nums.length; i++) {
      if (i !== count && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);
  return res;
};
// @lc code=end
