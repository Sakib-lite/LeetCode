/*
 * @lc app=leetcode id=166 lang=javascript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 *
 *
 */

var fractionToDecimal = function (numerator, denominator) {
  let integerPart=Math.abs(Math.trunc(numerator/denominator)).toString()
  const sign=numerator*denominator<0
  if(sign){
  
  numerator=Math.abs(numerator)
  denominator=Math.abs(denominator)
  
  }
  
  
  let remain= numerator % denominator;
  
  if(remain===0) return sign ? `-${integerPart}`:integerPart
  
  integerPart+='.'
  const hash={}
  
  while(remain!==0){
  
    if(hash[remain]){
  const index=hash[remain]
  integerPart=integerPart.substring(0,index)+'('+integerPart.substring(index)+')'
  break
    }
  
    hash[remain]=integerPart.length
    remain*=10
    integerPart+=Math.trunc(remain/denominator).toString()
    remain%=denominator
  }
  return sign ? `-${integerPart}`:integerPart
  
  };
// @lc code=end
