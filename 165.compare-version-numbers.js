/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let V1 = version1.split('.');
  let V2 = version2.split('.');
  const max = Math.max(V1.length, V2.length);
  
  for (let i = 0; i < max; i++) {
    if (V1[i] === '.' || V2 === '.') continue;
    let v1 = Number(V1[i]) || 0;
    let v2 = Number(V2[i]) || 0;
    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
  }

  return 0;
};
// @lc code=end
