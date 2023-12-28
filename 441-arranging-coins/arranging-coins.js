/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let l = 0;
    let r = n;
    let rows = 0;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let coins = (mid / 2) * (mid + 1)

        if (coins > n) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
            rows = Math.max(mid, rows)
        }
    }
    return rows;
};