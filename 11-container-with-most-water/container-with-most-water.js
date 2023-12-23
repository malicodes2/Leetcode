/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    maximum_area = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        area = (r - l) * Math.min(height[l], height[r])
        maximum_area = Math.max(maximum_area, area)

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maximum_area;
};