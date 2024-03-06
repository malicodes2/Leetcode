/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    let n = nums.length;
    let array = [];
    
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            array.push(i)
        }
    }
    return array
};