/*
 * @lc app=leetcode id=347 lang=cpp
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
class Solution {
public:
    static bool compareByVal(const pair<int, int>& x, const pair<int, int>& y) {
        return x.second < y.second;
    }

    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> hashTable;

        for (int i = 0; i < nums.size(); i++) {
            int current = nums[i];
            if (hashTable.find(current) != hashTable.end()) {
                hashTable[current] = hashTable[current] + 1;
            } else {
                hashTable[current] = 1;
            }
        };

        vector<pair<int, int>> store(hashTable.begin(), hashTable.end());
        sort(store.begin(), store.end(), compareByVal);
        vector<int> result;

        for (int i = store.size() - 1; i >= 0; i--) {

            if (k > 0) {
                result.push_back(store[i].first);
                k--;
            }
        }

        return result;
    };
};

// @lc code=end

