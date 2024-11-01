/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        let currChar = s[i];
        let currLen = result.length;

        if (currLen > 1 && result[currLen - 1] === currChar && result[currLen - 2] === currChar) {
            continue;
        }
        result.push(currChar);
    }
    return result.join('');
};