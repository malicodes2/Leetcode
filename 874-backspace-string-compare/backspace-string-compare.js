/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let strS = [];
    let countS = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '#') {
            countS++;
            continue;
        }
        else {
            if (countS > 0) {
                countS--;
            }
            else {
                strS.push(s[i]);
            }
        }
    }

    let strT = [];
    let countT = 0;
    for (let i = t.length - 1; i >= 0; i--) {
        if (t[i] == '#') {
            countT++;
            continue;
        }
        else {
            if (countT > 0) {
                countT--;
            }
            else {
                strT.push(t[i]);
            }
        }
    }

    return strS.join('') == strT.join('');
};