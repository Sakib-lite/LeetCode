/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const result = []
    for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "+") {
        result.push(result[result.length-1]+result[result.length-2])
      } else if (operations[i] === "D") {
        result.push(result[result.length-1]*2);
      } else if (operations[i] === "C") {
        result.pop()
      } else result.push(Number(operations[i]));
    }
    return result.reduce((acc,val)=>acc+val,0)
  };
  
// @lc code=end

