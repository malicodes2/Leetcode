/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    let sSorted = s.split("").sort().join("");
    let tSorted = t.split("").sort().join("");
    for (let i = 0; i < tSorted.length; i++) {
        if (sSorted[i] != tSorted[i]) {
            return false;
        }
    }
    return true;
};