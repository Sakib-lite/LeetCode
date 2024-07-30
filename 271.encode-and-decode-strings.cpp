class Solution {
public:
    vector<string> split(const string& str, const string& token) {

        vector<string> arr;

        size_t start = 0;
        size_t end = str.find(token);

        while (end != string::npos) {

            arr.push_back(str.substr(start, end - start));
            start = end + token.length();
            end = str.find(token, start);
        }

        arr.push_back(str.substr(start));

        return arr;
    }

    string separator = ":;";
    string encode(vector<string>& strs) {
        if (strs.size() == 1 && strs[0].empty())
            return separator;

        if (strs.empty())
            return "";
        string str = "";

        for (int i = 0; i < strs.size(); i++) {
            str += strs[i];
            if (i != strs.size() - 1)
                str += separator;
        }

        return str;
    }

    vector<string> decode(string s) {

        if (s == separator)
            return {""};
        if (s.empty())
            return {};
        return split(s, separator);
    }
};
