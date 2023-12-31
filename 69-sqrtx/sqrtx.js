/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0;
    let r = x;
    let result = 0

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (mid ** 2 > x) {
            r = mid - 1;
        }
        else if (mid ** 2 < x) {
            l = mid + 1;
            result = mid;
        }
        else {
            return mid;
        }
    }
    return result;
};