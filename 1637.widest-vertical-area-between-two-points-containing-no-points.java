/*
 * @lc app=leetcode id=1637 lang=java
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 */

// @lc code=start

import java.util.Arrays;

class Solution {
    public int maxWidthOfVerticalArea(int[][] points) {
        Arrays.sort(points, (a, b) -> a[0] - b[0]);
        int max = 0;

        for (int i = 1; i < points.length; i++) {
            max = Math.max(max, points[i][0] - points[i - 1][0]);
        }

        return max;
    }
}
// @lc code=end
