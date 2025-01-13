/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let res = [];

    for (let n of nums) {
        n = Math.abs(n);

        if (nums[n - 1] < 0) {
            res.push(n)
        }
        nums[n - 1] = nums[n - 1] * -1;
    }
    return res;
};