/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    digits.reverse();
    let carry = 1;
    let i = 0;
    while (carry) {
        if (i < digits.length) {
            if (digits[i] == 9) {
                digits[i] = 0;
            }
            else {
                digits[i]++;
                carry = 0;
            }
        }
        else {
            digits.push(1)
            carry = 0;
        }
        i++;
    }
    return digits.reverse();
};