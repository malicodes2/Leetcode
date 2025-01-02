/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    const vowelSet = new Set("aeiou");
    const prefixCnt = new Array(words.length + 1).fill(0);
    let prev = 0;
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (vowelSet.has(w[0]) && vowelSet.has(w[w.length - 1])) {
            prev++;
        }
        prefixCnt[i + 1] = prev;
    }
    const res = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const [l, r] = queries[i];
        res[i] = prefixCnt[r + 1] - prefixCnt[l];
    }
    return res;
};