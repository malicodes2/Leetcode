/**
 * @pnums[i]ram {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let threeSum = nums[i] + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            }
            else if (threeSum < 0) {
                l++;
            }
            else {
                res.push([nums[i], nums[l], nums[r]])
                l++;
                while (nums[l] == nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
};