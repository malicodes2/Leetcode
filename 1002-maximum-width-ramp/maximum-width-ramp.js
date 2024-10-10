/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    // Step 1: Prepare maxRight array to store max values to the right
    let maxRight = new Array(nums.length).fill(0);
    maxRight[nums.length - 1] = nums[nums.length - 1];

    // Populate maxRight array
    for (let i = nums.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(nums[i], maxRight[i + 1]);
    }

    // Step 2: Find maximum width ramp
    let res = 0;
    let left = 0;

    // Iterate through nums to find the largest ramp
    for (let right = 0; right < nums.length; right++) {
        while (left < right && nums[left] > maxRight[right]) {
            left++;
        }
        res = Math.max(res, right - left);
    }

    return res;
};