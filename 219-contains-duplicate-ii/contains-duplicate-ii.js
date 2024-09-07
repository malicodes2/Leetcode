/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let res = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - res.get(nums[i]) <= k) {
            return true;
        }
        else {
            res.set(nums[i], i);
        }
    }
    return false;
};