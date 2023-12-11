/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    let l = 0, r = k - 1;
    let result = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);

    while (r < nums.length) {
        result = Math.min(result, nums[r] - nums[l]);
        l++;
        r++;
    }

    return result;
};

//Time Complexity: O(n log n)
//Space Complexity: O(1)