/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    return helper(s, 0, s.length - 1);
};

const helper = (s, l, r) => {
    if (l > r) {
        return s;
    }
    [s[l], s[r]] = [s[r], s[l]];
    return helper(s, l + 1, r - 1);
}