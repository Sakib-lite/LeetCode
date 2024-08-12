/*
 * @lc app=leetcode id=36 lang=cpp
 *
 * [36] Valid Sudoku
 */

// @lc code=start
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {

        unordered_map<int, int> rowMap[9];
        unordered_map<int, int> colMap[9];
        unordered_map<int, int> boxMap[9];

        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                char current = board[row][col];
                if (current == '.')
                    continue;

                int boxIndex = (row / 3) * 3 + col / 3;

                
                if (rowMap[row][current] || colMap[col][current] ||
                    boxMap[boxIndex][current]) {
                    return false;
                }

        
                rowMap[row][current] = 1;
                colMap[col][current] = 1;
                boxMap[boxIndex][current] = 1;
            }
        }
        return true;
    };
};
// @lc code=end

