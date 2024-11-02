/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = [];

    heights.forEach((h, i) => {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1][1] > h) {
            let [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;
        }
        stack.push([start, h]);
    });

    for (let [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
};