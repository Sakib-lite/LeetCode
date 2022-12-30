/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const helper = (nums, skipIndex) => {
  let rob1 = 0,
    rob2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === skipIndex) continue;
    let temp = Math.max(nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  
  const skipFirst = helper(nums, 0);
  const skipLast = helper(nums, nums.length - 1);

  return Math.max(skipFirst, skipLast);
};
// @lc code=end
