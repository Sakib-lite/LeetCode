/*
 * @lc app=leetcode id=1758 lang=javascript
 *
 * [1758] Minimum Changes To Make Alternating Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  s = s.split("");
  first = s[0];
  count1 = calculate(s, first);
  count2 = calculate(s, first === "0" ? "1" : "0") + 1;
  return Math.min(count1, count2);
};

const calculate = (s, pre) => {
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    if (pre == s[i]) {
      max++;
      pre = pre == "0" ? "1" : "0";
    } else {
      pre = s[i];
    }
  }

  return max;
};
// @lc code=end
