/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let result = nums.sort((a, b) => a - b);
    let idx = [];
    for (let i = 0; i < result.length; i++) {
        if (nums[i] == target) {
            idx.push(i);
        }
    }
    return idx;
};