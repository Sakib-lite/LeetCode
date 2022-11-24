/*
 * @lc app=leetcode id=587 lang=javascript
 *
 * [587] Erect the Fence
 */

// @lc code=start
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
const outerTrees = (trees) => {
  trees.sort((x, y) => {
    if (x[0] == y[0]) return x[1] - y[1];
    return x[0] - y[0];
  });

  let lowerLayer = [],
    upperLayer = [];
  for (const tree of trees) {
    while (
      lowerLayer.length >= 2 &&
      cmp(lowerLayer[lowerLayer.length - 2], lowerLayer[lowerLayer.length - 1], tree) > 0
    )
      lowerLayer.pop();
    while (
      upperLayer.length >= 2 &&
      cmp(upperLayer[upperLayer.length - 2], upperLayer[upperLayer.length - 1], tree) < 0
    )
      upperLayer.pop();
    lowerLayer.push(tree);
    upperLayer.push(tree);
  }
  return [...new Set(lowerLayer.concat(upperLayer))];
};

const cmp = (p1, p2, p3) => {
  let [x1, y1] = p1;
  let [x2, y2] = p2;
  let [x3, y3] = p3;
  return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
};

// @lc code=end
