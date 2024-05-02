/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let res = -1;
    let numsSet = new Set(nums);
    for (let num of numsSet) {
        num = Number(num);
        if (numsSet.has(-num)) {
            res = Math.max(res, num);
        }
    }
    return res;
};