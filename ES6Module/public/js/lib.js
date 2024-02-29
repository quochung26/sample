const PARENTHESES_DATA = {
    '(': ')',
    '{': '}',
    '[': ']',
}

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s) {
    const searchs = []
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(PARENTHESES_DATA[char]) {
            searchs.push(char)
        } else if(searchs.length > 0) {
            const currentSearch = searchs[searchs.length - 1]
            if(s[i] === PARENTHESES_DATA[currentSearch]) {
                searchs.pop()
                continue
            } else {
                return false
            }
        } else {
            return false
        }
    }
   
    if(searchs.length === 0) return true
    return false
};