/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function (beginWord, endWord, wordList) {
  const hash = {};
  if (!wordList.includes(beginWord)) wordList.push(beginWord);

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    for (let j = 0; j < wordList[i].length; j++) {
      let pattern = word.substring(0, j) + '*' + word.substring(j + 1);
      if (!hash[pattern]) hash[pattern] = [];
      hash[pattern].push(word);
    }
  }

  let step = 1;
  const visited = {};
  let queue = [beginWord];
  visited[beginWord] = true;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let word = queue.shift();

      if (word === endWord) return step;

      for (let j = 0; j < word.length; j++) {
        let pattern = word.substring(0, j) + '*' + word.substring(j + 1);
        let list = hash[pattern];
        for (let elem of list) {
          if (!visited[elem]) {
            visited[elem] = true;
            queue.push(elem);
          }
        }
      }
    }
    step++;
  }

  return 0;
};

// @lc code=end
