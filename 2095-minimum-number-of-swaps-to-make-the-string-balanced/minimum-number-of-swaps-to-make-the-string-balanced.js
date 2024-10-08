/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let close = 0, maxClose = 0;
    for (let c of s) {
        if (c == '[') {
            close -= 1;
        } else {
            close += 1;
        }
        maxClose = Math.max(close, maxClose)
    }
    return Math.ceil(maxClose / 2);
};