/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let bal = 0;
    let missing = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            bal += 1;
        } else {
            bal -= 1;
        }
        while (bal < 0) {
            bal++;
            missing++;
        }
    }

    return missing + bal;
};