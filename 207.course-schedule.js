/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const val = prerequisites[i];
    adjList[val[1]].push(val[0]);
  }
  for (let v = 0; v < numCourses; v++) {
    const queue = [],
      seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
      while (queue.length) {
        const current = queue.shift();
        seen[current] = true;
        if (current === v) return false;
        const adjaecent = adjList[current];
        for (let i = 0; i < adjaecent.length; i++) {
          if (!seen[adjaecent[i]]) {
            queue.push(adjaecent[i]);
          }
        }
      }
    }
  }
  return true;
};

// console.log(
//   canFinish(7, [
//     [1, 0],
//     [2, 1],
//     [2, 5],
//     [0, 3],
//     [4, 3],
//     [3, 5],
//     [4, 5],
//   ])
// );

// @lc code=end
