/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if ((mid % 2 == 0 && mid + 1 < r && nums[mid] == nums[mid + 1]) || (mid % 2 == 1 && mid - 1 >= 0 && nums[mid] == nums[mid - 1])) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
        if (mid - 1 >= 0 && mid + 1 < r && nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]){
            return nums[mid];
        }
    }
    return nums[l];
};