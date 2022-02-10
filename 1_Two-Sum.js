// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i]+nums[j] == target) {
//         return [i,j]
//       }
//     }
//   }
// };

// const result=twoSum([10,25,30,40,51],76);
// console.log(result);

const sum =function(nums,target){
    for(let i of nums){
        for(let j of nums[i+1]){
            if (nums[i]+nums[j] == target) {
                return [i,j]
              }
        }
    }
}

const res=sum([10,25,30,40,51],76);
console.log(res);