/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let ans = [];
    let lengthOfS = s.length;
    let pos = lengthOfS + 1;
    for (let i = 0; i < lengthOfS; i++) {
        if (s[i] == c) {
            pos = i;
        }
        ans.push(Math.abs(pos - i))
    }
    for (let i = lengthOfS - 1; i >= 0; i--) {
        if (s[i] == c) {
            pos = i;
        }
        ans[i] = Math.min(ans[i], Math.abs(pos - i))
    }
    return ans;
};