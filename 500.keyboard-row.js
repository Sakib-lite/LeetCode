/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
const firstRow = {
  q: true,
  w: true,
  e: true,
  r: true,
  t: true,
  y: true,
  u: true,
  i: true,
  o: true,
  p: true,
};

const secondRow = {
  a: true,
  s: true,
  d: true,
  f: true,
  g: true,
  h: true,
  j: true,
  k: true,
  l: true,
};
const thirdRow = {
  z: true,
  x: true,
  c: true,
  v: true,
  b: true,
  n: true,
  m: true,
};
const checkWord = (str, kewRows) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!kewRows[char]) return false;
  }

  return true;
};

var findWords = function (words) {
  const res = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (
      checkWord(word, firstRow) ||
      checkWord(word, secondRow) ||
      checkWord(word, thirdRow)
    )
      res.push(word);
  }

  return res;
};

// @lc code=end
