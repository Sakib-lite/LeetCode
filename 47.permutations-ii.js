/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];

  const backtrack = (i, path) => {
    if (i === nums.length) {
      res.push(Array.from(path));
      return;
    }
    const hash = {};
    
    for (let j = i; j < nums.length; j++) {
      const digit = nums[j];
      if (hash[digit]) continue;
      hash[digit] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backtrack(i + 1, path);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  backtrack(0, nums);

  return res;
};
// @lc code=end
