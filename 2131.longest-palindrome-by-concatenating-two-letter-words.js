/*
 * @lc app=leetcode id=2131 lang=javascript
 *
 * [2131] Longest Palindrome by Concatenating Two Letter Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} word
 * @return {number}
 */

const reverse = (word) => word.split('').reverse().join('');

var longestPalindrome = function (words) {
  let count = 0;
  const hash = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversed = reverse(word);

    if (hash[word]) {
      hash[word]--;
      count += 4;
    } else hash[reversed] = hash[reversed] + 1 || 1;
  }

  const hasMorePalindromes = Object.keys(hash).filter(
    (str) => hash[str] && str === reverse(str)
  );

  if (hasMorePalindromes.length) count += 2;

  return count;
};

// @lc code=end
