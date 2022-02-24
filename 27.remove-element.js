// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++
    }
  }
  return count;
};

// @lc code=end


// var removeElement = function (nums, val) {
//     nums = nums.filter((num) => num !== val);
//     console.log(nums)
//   return nums.length;
// };
// const arr = removeElement([3, 2, 2, 3], 3);
// console.log(arr);

