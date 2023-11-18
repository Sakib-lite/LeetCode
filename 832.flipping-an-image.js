/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
  }

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      image[i][j] === 1 ? (image[i][j] = 0) : (image[i][j] = 1);
    }
  }
  return image;
};

// @lc code=end
