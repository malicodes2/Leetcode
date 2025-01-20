/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '') return 0;
    const lps = new Array(needle.length).fill(0);
    let prevLPS = 0;
    let i = 1;

    // LPS
    while (i < needle.length) {
        if (needle[i] == needle[prevLPS]) {
            lps[i] = prevLPS + 1;
            prevLPS += 1;
            i += 1;
        }
        else if (prevLPS == 0) {
            lps[i] = 0;
            i += 1;
        }
        else {
            prevLPS = lps[prevLPS - 1];
        }
    }

    i = 0; //ptr haystack 
    let j = 0; //ptr needle

    while (i < haystack.length) {
        if (haystack[i] == needle[j]) {
            i++;
            j++;
        }
        else {
            if (j == 0) {
                i++;
            }
            else {
                j = lps[j - 1];
            }
        }
        if (j == needle.length) {
            return i - needle.length;
        }
    }
    return -1;
};