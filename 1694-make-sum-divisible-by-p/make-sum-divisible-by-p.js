/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = (total + nums[i]) % p;
    }
    if (total === 0) {
        return 0;
    }

    let map = new Map([[0, -1]]);
    let sum = 0;
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum = (sum + nums[i]) % p;
        let prev = (sum - total + p) % p;
        if (map.has(prev)) {
            res = Math.min(res, i - map.get(prev));
        }
        map.set(sum, i);
    }
    if (res === nums.length) {
        return -1;
    } else {
        return res;
    }
};