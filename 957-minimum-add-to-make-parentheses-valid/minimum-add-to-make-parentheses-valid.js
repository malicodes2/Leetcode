/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let bal = 0;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            bal += 1;
        } else {
            bal -= 1;
        }
        while (bal <0){
            bal++;
            ans++;
        }
    }

    return ans + bal;
};