/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length == 0) return [[]];

    let perms = permute(nums.slice(1));
    let res = [];

    for (let p of perms) {
        for (let i = 0; i <= p.length; i++) {
            let pCopy = [...p];
            pCopy.splice(i, 0, nums[0]);
            res.push(pCopy);
        }
    }
    return res;
};