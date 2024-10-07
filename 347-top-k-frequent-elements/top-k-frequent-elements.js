/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {};
    let freq = Array.from({ length: nums.length + 1 }, () => []);

    // Count the occurrences of each number
    for (let n of nums) {
        count[n] = (count[n] || 0) + 1;
    }

    // Organize numbers by their frequency
    for (let [n, c] of Object.entries(count)) {
        freq[c].push(Number(n));
    }

    let res = [];

    // Traverse frequencies in descending order
    for (let i = freq.length - 1; i > 0; i--) {
        for (let n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }

};