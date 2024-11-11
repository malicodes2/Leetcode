/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = 0, fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow == fast) {
            break;
        }
    }

    let slowTwo = 0;
    while (true) {
        slow = nums[slow];
        slowTwo = nums[slowTwo];
        if (slow == slowTwo) {
            return slowTwo;
        }
    }
};