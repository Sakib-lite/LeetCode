// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = { '(': ')', '{': '}', '[': ']' };

  const arr = s.toString().split('');
  let existingPair = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]; //1.(   2.)

    if (brackets[current]) existingPair.push(current);
    //'(' key
    else {
      const checkBracket = existingPair.pop();

      if (brackets[checkBracket] != current) return false; //'(' === ')'
    }
    //in true condition existingPair array will be empty []
  }
  
  if (existingPair.length > 0) return false;

  return true;
};
isValid('()');
// @lc code=end
