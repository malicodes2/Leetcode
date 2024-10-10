/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    let maxRight = new Array(nums.length).fill(0);
    let i = nums.length - 1;
    let prevMax = 0;

    // Loop through nums in reverse and fill maxRight array
    for (let n of nums.slice().reverse()) {
        maxRight[i] = Math.max(n, prevMax);
        prevMax = maxRight[i];
        i--;
    }

    // Step 2: Find maximum width ramp
    let res = 0;
    let left = 0;

    // Iterate through nums to find the largest ramp
    for (let right = 0; right < nums.length; right++) {
        while (nums[left] > maxRight[right]) {
            left++;
        }
        res = Math.max(res, right - left);
    }

    return res;
};