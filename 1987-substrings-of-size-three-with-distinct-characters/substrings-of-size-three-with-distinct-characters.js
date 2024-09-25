/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    if (s.length < 3) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        let substr = s.substring(i, i + 3);
        let uniqueChars = new Set(substr);
        if (uniqueChars.size === 3) {
            count++;
        }
    }
    return count;
};