/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined) &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined)
    ) {
      i++;
      count++;
    }
  }

  return n <= count;
};

// @lc code=end
