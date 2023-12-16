/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    let r = s.length - 1;
    let l = 0

    while (l < r) {
        if (s[r] !== s[l]) {
            let ignoreL = s.substring(l + 1, r + 1)
            let ignoreR = s.substring(l, r)

            if (ignoreL === ignoreL.split("").reverse().join("") || ignoreR === ignoreR.split("").reverse().join("")) {
                return true
            } else {
                return false
            }
        }
        r--;
        l++
    }
    return true
};