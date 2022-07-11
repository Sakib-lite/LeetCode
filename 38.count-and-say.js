/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */

const countFunc = (arr) => {
  let res = '';
  let count = 0;
  let str = arr[arr.length - 1];
  for (let i = 0; i < str.length; i++) {
    count++;
    if (i === str.length - 1 || str.charAt(i) !== str.charAt(i + 1)) {
      res += count + str.charAt(i);
      count = 0;
    }
  }
  arr.push(res);
  return arr;
};

var countAndSay = function (n) {
  let arr = [];
  arr.push('1');
  let called = 1;
  while (called < n) {
    countFunc(arr);
    called++;
  }
  return arr[n - 1];
};
// @lc code=end
