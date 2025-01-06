/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let l = 0;
    let res = 0;

    for (let r = 0; r < nums.length; r++) {
        res = nums[r] == 1 ? Math.max(res, r - l + 1) : (l = r + 1, res);
    }

    return res;
};