/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (str, start, end) => {
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
};

const backtrack = (str, path, count, res) => {
  if (count === str.length) {
    res.push(Array.from(path));
    return;
  }
  for (let i = count; i < str.length; i++) {
    const current = str.slice(count, i + 1);
    if (isPalindrome(str, count, i)) {
      path.push(current);
      backtrack(str, path, i + 1, res);
      path.pop();
    }
  }
};

var partition = function (s) {
  const res = [];

  backtrack(s, [], 0, res);

  return res;
};

// @lc code=end
