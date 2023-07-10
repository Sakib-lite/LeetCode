/*
 * @lc app=leetcode id=2078 lang=javascript
 *
 * [2078] Two Furthest Houses With Different Colors
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let longest = 0,
      p1 = 0,
      p2 = colors.length - 1;
    while (p1 < p2) {
      const first = colors[p1];
      const second = colors[p2];
      if (first === second) {
        p2--;
      } else {
        longest = Math.max(longest, p2-p1);
        p1++;
      }
    }
  
    let p3 = colors.length - 1,
      p4 = 0;
  
    while (p3 > p4) {
      const first = colors[p3];
      const second = colors[p4];
      if (first === second) {
        p4++;
      } else {
        longest = Math.max(longest,p3-p4);
        p3--;
      }
    }
    return longest;
  };
// @lc code=end

