/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (nums, current, path, used, res) => {
  if (current === nums.length) res.push(Array.from(path));
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    path.push(nums[i]);
    used[i] = true;
    backtrack(nums, current + 1, path, used, res);
    path.pop();
    used[i] = false;
  }
};

var permute = function (nums) {
  const res = [],
    hashMap = {};
  backtrack(nums, 0, [], hashMap, res);
  return res;
};

// @lc code=end
