/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const hashMap = {},
    res = [];
  const wordCount = words.length;
  const wordLength = words[0].length;
  const totalLength = wordCount * wordLength;

  for (let i of words) {
    hashMap[i] =hashMap[i]+ 1|| 1;
  }
  
  for (let i = 0; i < s.length - totalLength + 1; i++) {
    const str = s.slice(i, i + totalLength);
    if (isMatched(str, hashMap, wordLength)) res.push(i);
  }

return res
};

const isMatched = (str, map, len) => {
  let seen = {};
  for (let i = 0; i < str.length; i+=len) {
    const word = str.slice(i, i + len);
    seen[word] =seen[word] + 1||1;
  }
  for (let key in map) {
    if (map[key] !== seen[key]) return false;
  }

  return true;
};
// @lc code=end
