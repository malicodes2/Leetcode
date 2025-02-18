/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    // for (let i = 1; i < nums.length; i++) {
    //     nums[i] = nums[i - 1] + nums[i];
    // }
    // return nums;
    return helper(nums, 1);
};

const helper = (nums, idx) => {
    if (idx == nums.length) {
        return nums;
    }
    nums[idx] += nums[idx - 1];
    return helper(nums, idx + 1);
}