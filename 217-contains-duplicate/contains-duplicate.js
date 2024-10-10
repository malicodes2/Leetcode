/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // nums.sort();
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] == nums[i - 1]) {
    //         return true;
    //     }
    // }
    // return false;

    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hash.has(nums[i])) {
            hash.set(nums[i], 0);
        }
        else {
            return true;
        }
    }
    return false;
};