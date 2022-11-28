/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function (matches) {
  let looserBased = [...matches.sort((a, b) => a[1] - b[1])];
  let winnerBased = [...matches.sort((a, b) => a[0] - b[0])];
  const zeroL = new Set(),
    oneL = [],
    allLosers = new Set(),
    hash = {};

  for (let i = 0; i < looserBased.length; i++) {
    const result = looserBased[i];
    if (!hash[result[1]]) oneL.push(result[1]);
     if(hash[result[1]]===1) oneL.pop();
    hash[result[1]] = hash[result[1]] + 1 || 1;
    allLosers.add(result[1]);
  }

  for (let i = 0; i < winnerBased.length; i++) {
    const result = winnerBased[i];
    zeroL.add(result[0]);
    if (allLosers.has(result[0])) zeroL.delete(result[0]);
  }

  return [Array.from(zeroL), oneL];
};
