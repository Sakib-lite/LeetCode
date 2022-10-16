/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let firstStation = 0,
    tank = 0,
    sum = 0;

  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < 0) {
      tank += sum;
      sum = 0;
      firstStation = i + 1;
    }
  }
  tank += sum;
  if (tank >= 0) return firstStation;
  return -1;
};

// @lc code=end
