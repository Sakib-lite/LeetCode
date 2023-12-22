/*
 * @lc app=leetcode id=136 lang=java
 *
 * [136] Single Number
 */

// @lc code=start

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int singleNumber(int[] nums) {

        Map hashTable = new HashMap();

        for (int i = 0; i < nums.length; i++) {
            int current = nums[i];
            Integer existingPair = hashTable.get(current);

            if (existingPair != null) {
                hashTable.remove(current);
            } else {
                hashTable.put(nums[i], 1);
            }
        }

        System.out.println(hashTable);
        return hashTable;

    }
}
// @lc code=end
