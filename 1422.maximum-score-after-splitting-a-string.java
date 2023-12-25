/*
 * @lc app=leetcode id=1422 lang=java
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start
class Solution {
    public int maxScore(String s) {
        int max = 0;
        int sumZero = 0;
        int sumOne = 0;
        int len = s.length();

        for (int i = 0; i < len; i++) {
            if (s.charAt(i) == '1')
                sumOne++;
        }

        for (int i = 0; i < len - 1; i++) {
            if (s.charAt(i) == '0')
                sumZero++;
            else
                sumOne--;
            max = Math.max(max, sumOne + sumZero);
        }

        return max;

    }
}
// @lc code=end
