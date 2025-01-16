/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const count = new Map();
    const res = [];

    for (let num of nums) {
        const row = count.get(num) || 0;
        if (res.length == row) {
            res.push([]);
        }
        res[row].push(num);
        count.set(num, row + 1);
    }
    return res;
};