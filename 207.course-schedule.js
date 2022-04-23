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
  const inDegree = new Array(numCourses).fill(0);
  const adjList = inDegree.map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const val = prerequisites[i];
    inDegree[val[0]]++;
    adjList[val[1]].push(val[0]);
  }

  const stack = [];
  for (let v = 0; v < inDegree.length; v++) {
    if (inDegree[v] === 0) stack.push(v);
  }
  let count = 0;

  while (stack.length) {
    const current = stack.pop();
    count++;
    const adjaecent = adjList[current];
    for (let i = 0; i < adjaecent.length; i++) {
      const next = adjaecent[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }

  return count === numCourses;
};

console.log(
  canFinish(7, [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ])
);

// @lc code=end
