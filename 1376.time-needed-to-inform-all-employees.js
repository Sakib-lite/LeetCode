/*
 * @lc app=leetcode id=1376 lang=javascript
 *
 * [1376] Time Needed to Inform All Employees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

const dfs = (currentId, adjacencyList, informTime) => {
  if (adjacencyList[currentId].length === 0) return 0;
  let maxTime = 0;
  const subOrdinates = adjacencyList[currentId];
  for (let i = 0; i < subOrdinates.length; i++) {
    maxTime = Math.max(
      maxTime,
      dfs(subOrdinates[i], adjacencyList, informTime)
    );
  }
  return maxTime + informTime[currentId];
};

var numOfMinutes = function (n, headID, manager, informTime) {
  const adjacencyList = manager.map(() => []);
  for (let employee = 0; employee < n; employee++) {
    const managerNode = manager[employee];
    if (managerNode === -1) continue;
    adjacencyList[managerNode].push(employee);
  }
  return dfs(headID, adjacencyList, informTime);
};
// @lc code=end
console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]));
