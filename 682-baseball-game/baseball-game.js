/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];

    for (let ops of operations) {
        if (ops == '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        }
        else if (ops == 'D') {
            stack.push(2 * stack[stack.length - 1]);
        }
        else if (ops == 'C') {
            stack.pop();
        }
        else {
            stack.push(Number(ops))
        }
    }
    return stack.reduce((a, b) => a + b, 0);
};