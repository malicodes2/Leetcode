/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height) {
        return 0;
    }

    let l = 0;
    let r = height.length - 1;
    let LeftMax = height[l];
    let RightMax = height[r];
    let res = 0;

    while (l < r) {
        if (LeftMax < RightMax) {
            l++;
            LeftMax = Math.max(LeftMax, height[l]);
            res += (LeftMax - height[l]);
        } else {
            r--;
            RightMax = Math.max(RightMax, height[r]);
            res += (RightMax - height[r]);
        }
    }
    return res;
};