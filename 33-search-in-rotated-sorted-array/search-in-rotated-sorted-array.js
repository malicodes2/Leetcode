/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target == nums[mid]) {
            return mid;
        }

        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[r] >= target && nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};