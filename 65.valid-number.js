/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let hasDigits = false,
    hasE = false,
    hasDigitsMissingAfterE = false,
    hasDot = false;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    console.log('  char', char);
    if (char >= '0' && char <= '9') {
      hasDigits = true;
      hasDigitsMissingAfterE = false;
    } else if (char === '+' || char === '-') {
      if (i !== 0 && s[i - 1] !== 'e') return false;
    } else if (char === '.') {
      if (hasDot || hasE) return false;
      hasDot = true;
    } else if (char === 'e' || char==='E') {
      if (hasE || !hasDigits) return false;
      hasE = true;
      hasDigitsMissingAfterE = true;
    } else return false;
  }

  return hasDigits && !hasDigitsMissingAfterE;
};

// @lc code=end
