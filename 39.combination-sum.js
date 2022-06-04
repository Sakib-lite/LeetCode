/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @param {number[]} currentCombination
 * @return {number[][]}
 */

const dfsBacktrack = (remain, arr, currentCombination, start, list) => {
  if (remain === 0) list.push(currentCombination.slice());
  for (let i = start; i < arr.length; i++) {
    if (remain - arr[i] >= 0) {
      currentCombination.push(arr[i]);
      dfsBacktrack(remain - arr[i], arr, currentCombination, i, list);
      currentCombination.pop();
    }
  }
};

var combinationSum = function (candidates, target) {
  let res = [];
  dfsBacktrack(target, candidates, [], 0, res);
  return res;
};

// @lc code=end
