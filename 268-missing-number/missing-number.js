/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], true);
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!hash.has(i)) {
            return i;
        }
    }
    return nums.length;
};