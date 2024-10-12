/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
    let start = [], end = [];

    for (let [l, r] of intervals) {
        start.push(l);
        end.push(r);
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let i = 0; j = 0;
    let groups = 0;
    let res = 0;

    while (i < intervals.length) {
        if (start[i] <= end[j]) {
            groups += 1;
            i++;
        } else {
            groups -= 1;
            j++;
        }
        res = Math.max(res, groups)
    }
    return res;
};