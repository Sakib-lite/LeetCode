/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    const direction = {
      R: 1,
      L: -1,
      U: 10,
      D: -10,
    };
    let count = 0;
    for (let i = 0; i < moves.length; i++) {
      count += direction[moves[i]];
    }
    return count === 0;
  };
// @lc code=end

