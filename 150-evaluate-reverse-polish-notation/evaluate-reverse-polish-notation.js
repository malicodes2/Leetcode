/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let c of tokens) {
        if (c == "+") {
            stack.push(stack.pop() + stack.pop());
        }
        else if (c == "-") {
            let a = stack.pop(), b = stack.pop();
            stack.push(b - a);
        }
        else if (c == "*") {
            stack.push(stack.pop() * stack.pop());
        }
        else if (c == "/") {
            let a = stack.pop(), b = stack.pop();
            stack.push(Math.trunc(b / a));
        }
        else {
            stack.push(parseInt(c));
        }
    }
    return stack[0];
};