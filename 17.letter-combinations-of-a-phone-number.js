/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  if (digits == null || digits.length === 0) return [];
  const result = [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const dfs = (i, str) => {
    if (i === digits.length) {
      result.push(str);
      return;
    }
    for (let char of map[digits[i]]) {
      dfs(i + 1, str + char);
    }
  };

  dfs(0, '');
  return result;
};

// @lc code=end
