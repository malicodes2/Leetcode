/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let sorted = Array.from(new Set(nums)).sort((a, b) => b - a);

    if (sorted.length < 3) {
        return sorted[0];
    } else {
        return sorted[2];
    }
};