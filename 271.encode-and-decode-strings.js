class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    static separator=":;"
    encode(strs) {
        if(strs.length===0) return null
        return strs.join(Solution.separator)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str===null)return []
         if(str.length===0 ) return [""]
        return str.split(Solution.separator)
    }
}
