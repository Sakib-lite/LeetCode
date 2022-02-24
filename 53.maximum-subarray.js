// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] > nums[i]) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    max = Math.max(max, sum);
  }

  return max;
}

const a = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
//                     -2 -1  -2  4   3  5  6   1  5
console.log(a);
// @lc code=end

// 

