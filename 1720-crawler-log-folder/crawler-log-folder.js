/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let res = 0;

    for (log of logs) {
        if (log == "./") {
            continue;
        }
        else if (log == "../") {
            res = Math.max(0, res -= 1);
        }
        else {
            res += 1;
        }
    }
    return res;
};