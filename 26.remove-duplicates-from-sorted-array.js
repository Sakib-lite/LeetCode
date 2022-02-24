// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(i)
    if (nums[i] != nums[i - 1]) {
        console.log(nums[i], nums[i - 1]);
      nums[count] = nums[i];
      count++;
    }
     console.log(count)
   console.log(nums) 
}

//   [0,1,2,3,4,2,2,3,3]
  return count;
};

const arr = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(arr);
// @lc code=end
