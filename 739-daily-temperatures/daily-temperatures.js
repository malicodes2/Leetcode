/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];

    temperatures.forEach((t, i) => {
        while (stack.length > 0 && t > stack[stack.length - 1][0]) {
            let [stackTemp, stackIndex] = stack.pop();
            res[stackIndex] = (i - stackIndex)
        }
        stack.push([t, i]);
    });
    return res;
};