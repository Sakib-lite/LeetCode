/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];

  const dfs = (count, dots, currentIp) => {
    if (dots === 4 && count === s.length) {
      res.push(currentIp.substring(0, currentIp.length - 1));
      return;
    }
    if (dots > 4) return;

    for (let i = count; i < Math.min(count + 3, s.length); i++) {
      let curNum = Number(s.substring(count, i + 1));

      if (curNum <= 255 && (count===i || s.charAt(count) !== '0')) {
        dfs(i + 1, dots + 1, currentIp + s.substring(count, i + 1) + '.');
      }
    }
  };

  dfs(0, 0, '');

  return res;
};

// @lc code=end
