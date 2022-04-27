/*
 * @lc app=leetcode id=743 lang=javascript
 *
 * [743] Network Delay Time
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const networkDelayTime = function (times, n, k) {
  const distances = new Array(n).fill(Infinity);
  distances[k - 1] = 0;
  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];

      if (distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }

    if (count == 0) break;
  }
  const result = Math.max(...distances);
  return result === Infinity ? -1 : result;
};

// @lc code=end
