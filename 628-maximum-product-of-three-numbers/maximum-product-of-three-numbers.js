/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    let productOne = nums[n - 1] * nums[n - 2] * nums[n - 3];
    let productTwo = nums[0] * nums[1] * nums[n - 1];

    let res = Math.max(productOne, productTwo);

    return res;
};