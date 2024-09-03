/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = nums1.concat(nums2).sort((a, b) => a-b);
    if (res.length % 2 == 1) {
        return res[Math.floor(res.length / 2)];
    } 
    if (res.length % 2 == 0) {
        return (res[res.length / 2] + res[res.length / 2 - 1]) / 2;
    }
};