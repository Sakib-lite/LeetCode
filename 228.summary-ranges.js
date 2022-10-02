/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const res = [];

  if (nums.length === 0) return res;

  let str = nums[0].toString(),
    count = 0,
    track = nums[0] + 1,
    diff = 1;

  while (count < nums.length) {
    if (track !== nums[count + 1]) {
      let digit = nums[count].toString();

      if (diff > 1) str += '->' + digit;
      else str = digit;
      res.push(str);

      diff = 0;
      str = nums[count + 1];
      track = nums[count + 1];
    }

    diff++;
    track++;
    count++;
  }

  return res;
};
// @lc code=end
