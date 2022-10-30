/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let start = 0,
    end = 10;
  const hash = {},
    visited = {};
  res = [];

  while (end <= s.length) {
    const str = s.substring(start, end);

    if (hash[str] && !visited[str]) {
      res.push(str);
      visited[str] = true;
    }
    hash[str] = true;

    start++;
    end++;
  }

  return res;
};

// @lc code=end
