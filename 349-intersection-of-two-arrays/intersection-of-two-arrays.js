/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let numsOneMap = new Map();
    let arr = [];

    for (let i = 0; i < nums1.length; i++) {
        if (!numsOneMap.has(nums1[i])){
            numsOneMap.set(nums1[i], true)
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if(numsOneMap.has(nums2[i]) && !arr.includes(nums2[i])){
            arr.push(nums2[i]);
        }
    }
    return arr;
};