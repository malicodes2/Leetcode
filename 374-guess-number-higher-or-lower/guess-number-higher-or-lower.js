/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1;
    let high = n;
    while (true) {
        let mid = Math.floor((low + high) / 2)
        let myGuess = guess(mid)
        if (myGuess == 1) {
            low = mid + 1;
        } else if (myGuess == -1) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
};