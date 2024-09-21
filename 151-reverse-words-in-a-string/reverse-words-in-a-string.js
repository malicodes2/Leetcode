/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(" ").filter(word => word !== '').reverse().join(' ');
    return s;
};