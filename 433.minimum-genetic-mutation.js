/*
 * @lc app=leetcode id=433 lang=javascript
 *
 * [433] Minimum Genetic Mutation
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const chars = ['A', 'C', 'G', 'T'];
  let bankSet = new Set(bank);
  if (!bankSet.has(end)) return -1;

  const queue = [start];
  let count = 0;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const dna = queue.shift();
      for (let j = 0; j < 8; j++) {
        for (let char of chars) {
          const newDna = dna.slice(0, j) + char + dna.slice(j + 1);
          if (newDna === end) return count + 1;

          if (bankSet.has(newDna)) {
            bankSet.delete(dna);
            queue.push(newDna);
          }
        }
      }
    }
    count++;
  }
  return -1;
};

// @lc code=end
