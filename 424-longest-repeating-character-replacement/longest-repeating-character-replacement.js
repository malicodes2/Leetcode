/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let count = {};
    let res = 0;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
        count[s[r]] = (count[s[r]] || 0) + 1;
        let maxCount = Math.max(...Object.values(count));
        // If the current window size minus the max frequency is greater than k, shrink the window
        while (r - l + 1 - maxCount > k) {
            count[s[l]]--;
            l++;
        }
        res = Math.max(res, r - l + 1)
    }
    return res;
};