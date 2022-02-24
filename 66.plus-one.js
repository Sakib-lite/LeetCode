
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) return digits;
    else {
      digits[i] = 0;
    }
  }
  console.log(digits);

  digits.unshift(1);
  console.log(digits);

  return digits;
}

console.log(plusOne([4, 3, 2, 1]));

// @lc code=end
