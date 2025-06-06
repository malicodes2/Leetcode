/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let stack = [];
    let res = [];

    const backtrack = (openN, closedN) => {
        if (openN === closedN && openN === n) {
            res.push(stack.join(""));
            return;
        }

        if (openN < n) {
            stack.push("(");
            backtrack(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN) {
            stack.push(")");
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return res;
};