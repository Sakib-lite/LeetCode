/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let target,
    start = 0,
    end = intervals.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (intervals[mid][0] >= newInterval[0]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  target = start;
  console.log(target)
  intervals.splice(target, 0, newInterval);
//merge sort
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let interval of intervals) {
    const e1 = res[res.length - 1][1];
    const s2 = interval[0];
    const e2 = interval[1];

    if (e1 >= s2) {
      res[res.length - 1][1] = Math.max(e1, e2);
    } else {
      res.push(interval);
    }
  }
  return res;
};

// @lc code=end
