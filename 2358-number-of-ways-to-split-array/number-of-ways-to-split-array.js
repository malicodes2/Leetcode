/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let right = 0;
    let left = 0;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        right += nums[i];
    }

    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        right -= nums[i];

        if (left >= right) {
            res++;
        }
    }
    return res;
};