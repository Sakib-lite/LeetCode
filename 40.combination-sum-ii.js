/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number[]} arr
 * @param {number[]} currentCombination
 * @param {number} target
 * @return {number[][]}
 */

const partition = (arr, pivot, end) => {
  let swapIndex = pivot;
  for (let i = pivot + 1; i <= end; i++) {
    if (arr[i] < arr[pivot]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[pivot], arr[swapIndex]] = [arr[swapIndex], arr[pivot]];

  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
};

const dfsBacktrack = (remain, arr, currentCombination, start, result) => {
  if (remain === 0) result.push(currentCombination.slice());
  for (let i = start; i < arr.length; i++) {
    if (i > start && arr[i] === arr[i - 1]) continue;
    if (remain - arr[i] >= 0) {
      currentCombination.push(arr[i]);
      dfsBacktrack(remain - arr[i], arr, currentCombination, i + 1, result);
      currentCombination.pop();
    }
  }
  return result;
};

var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = quickSort(candidates);
  dfsBacktrack(target, candidates, [], 0, res);
  return res;
};
// @lc code=end
