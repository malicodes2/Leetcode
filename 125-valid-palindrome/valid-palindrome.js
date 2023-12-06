/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let l = 0;
    let r = s.length - 1;

    while (l < r) {

        while (l < r && !isAlphanumeric(s[l])) {
            l++;
        }

        while (r > l && !isAlphanumeric(s[r])) {
            r--;
        }

        if (s[l] != s[r]) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};

function isAlphanumeric(c) {
    return (
        (c >= 'A' && c <= 'Z') ||
        (c >= 'a' && c <= 'z') ||
        (c >= '0' && c <= '9')
    );
}

// Time Complexity ---> O(n)
// Space Complexity ---> O(1)