/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = 'aeiouAEIOU';
    let left = 0;
    let right = s.length - 1;
    let chars = s.split('');

    while (left < right) {
        if (!vowels.includes(chars[left])) {
            left++;
        }
        else if (!vowels.includes(chars[right])) {
            right--;
        }
        else {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
};