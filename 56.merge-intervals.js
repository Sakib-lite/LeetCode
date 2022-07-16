/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let interval of intervals) {
    e1 = res[res.length - 1][1];
    s2 = interval[0];
    e2 = interval[1];
    if (e1 >= s2) {
      res[res.length - 1][1] = Math.max(e1, e2);
    } else {
      res.push(interval);
    }
  }
  return res;
};

// @lc code=end
