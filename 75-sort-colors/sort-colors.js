/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let Zeros = 0
    let Ones = 0
    let Twos = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            Zeros++;
        }
        else if (nums[i] == 1) {
            Ones++;
        }
        else {
            Twos++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (Zeros > 0) {
            nums[i] = 0;
            Zeros--;
        }
        else if (Ones > 0) {
            nums[i] = 1;
            Ones--;
        } else if (Twos > 0) {
            nums[i] = 2;
            Twos--;
        }
    }
};