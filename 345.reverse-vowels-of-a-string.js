/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = {
    a: 1,
    A: 1,
    e: 1,
    E: 1,
    i: 1,
    I: 1,
    o: 1,
    O: 1,
    u: 1,
    U: 1,
  };

  let left = 0,
    right = s.length - 1;
  s = s.split('');

  while (left < right) {
    let leftChar = s[left],
      rightChar = s[right];

    if (vowels[leftChar] && vowels[rightChar]) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    } else if (vowels[leftChar] && !vowels[rightChar]) {
      right--;
    } else if (!vowels[leftChar] && vowels[rightChar]) {
      left++;
    } else {
      left++;
      right--;
    }
  }
  s = s.join('');
  return s;
};


// @lc code=end
