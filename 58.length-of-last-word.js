// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  s = s.replace(/\s+/g, ' ').trim();
  s = s.split(' ');
  const lastWord = s[s.length - 1];
  return lastWord.length;
}
const a=lengthOfLastWord( "   fly me   to   the moon  ")
console.log(a)
// @lc code=end
