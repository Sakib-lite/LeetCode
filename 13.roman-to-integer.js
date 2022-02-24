/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const list = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  s.split('').forEach((num, i) => {
    if (list[num] < list[s[i + 1]]) result -= list[num];
    else result += list[num];
  });
  return result;
};
romanToInt('MCMXCIV'); // 1000+900++90+4
// @lc code=end
