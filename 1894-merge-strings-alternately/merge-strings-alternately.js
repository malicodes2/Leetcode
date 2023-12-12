/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0, j = 0;
    let result = [];

    while (i < word1.length && j < word2.length) {
        result.push(word1[i]);
        result.push(word2[j]);
        i++;
        j++;
    }
    result = result.concat(word1.substring(i).split(''));
    result = result.concat(word2.substring(j).split(''));

    return result.join("");
};

// Time and Space complexity O(n+m)