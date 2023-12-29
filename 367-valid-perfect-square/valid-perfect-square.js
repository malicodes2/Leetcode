/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let l = 1;
    let r = Math.floor(num / 2);

    if (num == 1) {
        return true;
    }

    while (l <= r) {
        mid = Math.floor(l + (r - l) / 2);
        if (mid == Math.floor(num / mid) && num % mid == 0) {
            return true;
        }
        else if (mid < Math.floor(num / mid)) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return false;
};