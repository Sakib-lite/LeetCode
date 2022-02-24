// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) return i;
    else if (nums[i] > target) return i;
    else if (nums[i] < target && nums[i + 1] > target) return i + 1;
  }
  return nums.length;
};

console.log(searchInsert([1,3,5,6],6));
// @lc code=end
