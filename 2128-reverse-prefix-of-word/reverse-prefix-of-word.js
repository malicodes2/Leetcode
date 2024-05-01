/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let left = 0;
    let right = word.indexOf(ch);
    let array = word.split('');
    
    if (right === -1) {
        return word;
    }

    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--
    }

    return array.join('');
};