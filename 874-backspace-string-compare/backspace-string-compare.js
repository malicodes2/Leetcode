/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    compareStrings = (str) => {
        let arr = [];
        let count = 0;
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] == '#') {
                count++;
                continue;
            }
            else {
                if (count > 0) {
                    count--;
                }
                else {
                    arr.push(str[i]);
                }
            }
        }
        return arr.join('');
    }
    // let strS = [];
    // let countS = 0;
    // for (let i = s.length - 1; i >= 0; i--) {
    //     if (s[i] == '#') {
    //         countS++;
    //         continue;
    //     }
    //     else {
    //         if (countS > 0) {
    //             countS--;
    //         }
    //         else {
    //             strS.push(s[i]);
    //         }
    //     }
    // }

    // let strT = [];
    // let countT = 0;
    // for (let i = t.length - 1; i >= 0; i--) {
    //     if (t[i] == '#') {
    //         countT++;
    //         continue;
    //     }
    //     else {
    //         if (countT > 0) {
    //             countT--;
    //         }
    //         else {
    //             strT.push(t[i]);
    //         }
    //     }
    // }

    strS = compareStrings(s);
    strT = compareStrings(t);

    return strS == strT;
};