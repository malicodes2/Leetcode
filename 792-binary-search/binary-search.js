/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length);
};
const binarySearch = (nums, target, left, right) => {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
        return mid;
    }
    if (mid === left || mid === right) {
        return -1;
    }
    if (nums[mid] > target) {
        return binarySearch(nums, target, left, mid);
    }
    if (nums[mid] < target) {
        return binarySearch(nums, target, mid, right);
    }
};

