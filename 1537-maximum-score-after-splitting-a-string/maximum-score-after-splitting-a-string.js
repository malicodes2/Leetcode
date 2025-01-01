/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let res = 0;
    let zero = 0;
    let one = 0;
    for (let char of s) {
        if (char === '1') one++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == '0') {
            zero++;
        }
        else {
            one--;
        }
        res = Math.max(res, zero + one);
    }

    return res;
};