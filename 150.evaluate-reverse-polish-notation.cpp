/*
 * @lc app=leetcode id=150 lang=cpp
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
class Solution
{
public:
    int evalRPN(vector<string> &tokens)
    {
        stack<int> store;

        for (int i = 0; i < tokens.size(); i++)
        {

            string current = tokens[i];
            if (current == "+" || current == "-" || current == "*" || current == "/")
            {

                int second = store.top();
                store.pop();
                int first = store.top();
                store.pop();
                if (current == "+")
                {

                    store.push(first + second);
                }
                else if (current == "-")
                {
                    store.push(first - second);
                }
                else if (current == "*")
                {
                    store.push(first * second);
                }
                else if (current == "/")
                {
                    store.push(first / second);
                }
            }
            else
            {
                store.push(stoi(current));
            }
        }

        return store.top();
    }
};
// @lc code=end
