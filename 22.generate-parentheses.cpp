/*
 * @lc app=leetcode id=22 lang=cpp
 *
 * [22] Generate Parentheses
 */

// @lc code=start
class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> res;

        helper(n, n, "", res);

        return res;
    }

    void helper(int leftParenthesis, int rightParenthesis, string str, vector<string>& res) {

        if (leftParenthesis > rightParenthesis)
            return;
        if (leftParenthesis == 0 && rightParenthesis == 0)
            res.push_back(str);
        if (leftParenthesis > 0)
            helper(leftParenthesis - 1, rightParenthesis, str + "(", res);
        if (rightParenthesis > 0)
            helper(leftParenthesis, rightParenthesis - 1, str + ")", res);
    }
};
// @lc code=end

