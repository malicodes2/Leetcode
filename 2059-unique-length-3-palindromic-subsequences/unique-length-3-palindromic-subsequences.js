/**
 * @param {string} s
 * @return {number}
 */
function countPalindromicSubsequence(s) {
    const res = new Set(); // To store unique palindromic subsequences as (mid_c, outer_c)
    const left = new Set(); // To track characters seen on the left
    const right = new Map(); // To count occurrences of characters on the right

    // Initialize the `right` map with character counts
    for (const char of s) {
        right.set(char, (right.get(char) || 0) + 1);
    }

    // Iterate through the string
    for (const m of s) {
        // Decrement the count of the current character in the `right` map
        right.set(m, right.get(m) - 1);

        // Check for pairs of characters in `left` that can form palindromic subsequences
        for (const c of left) {
            if (right.get(c) > 0) {
                res.add(`${m},${c}`);
            }
        }

        left.add(m);
    }

    return res.size;
}