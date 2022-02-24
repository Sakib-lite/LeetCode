// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1;
  let right = x;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    if (mid * mid === x) return mid;
    else if (mid * mid > x) right = mid;
    else if (mid * mid < x) left = mid+1;
  }
  return left-1;
};


console.log(mySqrt(4));

/*  
1 2 3 4 5 6 7 8 9 10 
1 2 3 4 5

*/
// @lc code=end

