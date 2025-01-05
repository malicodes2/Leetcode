/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    let result = s.split(""); // Convert the string to an array for mutability

    // Accumulate shifts from right to left
    for (let i = shifts.length - 2; i >= 0; i--) { //Starting from 2nd last index b/c there is no addition of previous shifts in last shift
        shifts[i] = (shifts[i] + shifts[i + 1]) % 26;
    }

    // Apply the shifts to each character
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 97; // 'a' -> 0, 'b' -> 1, etc.
        result[i] = String.fromCharCode(((charCode + shifts[i]) % 26) + 97);
    }

    return result.join(""); // Join the array back into a string
};