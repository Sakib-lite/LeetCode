/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let min=Number.MAX_SAFE_INTEGER
    words.forEach((word) =>min=Math.min(min,word.length))
  console.log(min);
    const len=words.length
    console.log(len);
for(let i=0; i<words.length; i++) {
    for(let j=0;j<words[i].length; j++) {
        console.log(words[i]);


    }
}


};

console.log(commonChars(["bella","label","roller"]));
// @lc code=end

