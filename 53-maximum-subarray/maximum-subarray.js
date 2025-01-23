/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length;
    let best = nums[0];
    let sum = nums[0];
    for (let i = 1; i < n; i++) {
        sum = Math.max(nums[i], sum + nums[i])
        best = Math.max(best, sum);
    }
    return best;
};