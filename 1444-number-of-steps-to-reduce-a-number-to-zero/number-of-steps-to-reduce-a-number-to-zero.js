/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    return helper(num, 0);
};

const helper = (num, steps) => {
    if (num == 0) {
        return steps;
    }
    if (num % 2 == 0) {
        return helper(num / 2, steps + 1);
    }
    return helper(num - 1, steps + 1);
};