/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var subsets = function (nums) {
  const res = [];

  const dfs = (count, path) => {
    res.push([...path]);

    for (let i = count; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);

  return res;
};

// @lc code=end
