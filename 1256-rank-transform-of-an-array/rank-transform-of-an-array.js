/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    if (arr.length == 0) {
        return [];
    }

    let sortedArr = [...arr].sort((a, b) => a - b);

    let map = new Map();
    let rank = 1;

    for (let num of sortedArr) {
        if (!map.has(num)) {
            map.set(num, rank);
            rank++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = map.get(arr[i]);
    }

    return arr;
};