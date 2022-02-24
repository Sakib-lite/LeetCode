// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack === needle) return 0;

  for (let i = 0; i <= haystack.length; i++) {
    console.log(i);
    if (needle === haystack.substring(i, i + needle.length)) {
      //i==2 > ll===ll >substring(2,2+2)
      return i;
    }
  }
  return -1;
};

const a = strStr('hello', 'll');
console.log(a);
// @lc code=end
