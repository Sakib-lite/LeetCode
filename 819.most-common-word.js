/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const bannedList = {};
  const store = {};

  for (let i = 0; i < banned.length; i++) bannedList[banned[i]] = true;

  paragraph = paragraph.toLowerCase().split(/\W+/);

  for (let i = 0; i < paragraph.length; i++) {
    const word = paragraph[i];
    if (bannedList[word] || word==='') continue;
    store[word] = store[word] + 1 || 1;
  }

  const max = Math.max(...Object.values(store));

  return Object.keys(store).filter((el) => store[el] === max)[0];
};

// @lc code=end
