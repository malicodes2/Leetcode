/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    for (let i = 0; i < 31; i++) {
        if (n == Math.pow(4, i)) {
            return true;
        }
    }
    return false;
};