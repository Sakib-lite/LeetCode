/*
 * @lc app=leetcode id=1235 lang=javascript
 *
 * [1235] Maximum Profit in Job Scheduling
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const jobs = [];

  for (let i = 0; i < startTime.length; i++) {
    jobs.push({
      start: startTime[i],
      end: endTime[i],
      profit: profit[i],
    });
  }
  jobs.sort((a, b) => a.end - b.end);

  const dp = new Array(startTime.length).fill(0);
  dp[0] = jobs[0].profit;

  for (let i = 1; i < startTime.length; i++) {
    let earning = jobs[i].profit;
    let task = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j].end <= jobs[i].start) {
        task = j;
        break;
      }
    }
    if (task != -1) earning += dp[task];

    dp[i] = Math.max(dp[i - 1], earning);
  }
  return dp[dp.length - 1];
};

// @lc code=end
