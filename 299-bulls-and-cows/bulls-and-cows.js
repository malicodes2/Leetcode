/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let cows = 0;
    let bulls = 0;
    let secretMap = new Map();
    let guessMap = new Map();

    for (let index = 0; index < secret.length; index++) {
        let i = secret[index];
        let j = guess[index];

        if (i === j) {
            bulls++;
        }
        else {
            secretMap.set(i, (secretMap.get(i) || 0) + 1);
            guessMap.set(j, (guessMap.get(j) || 0) + 1);
        }
    }

    for (let [key, value] of guessMap) {
        if (secretMap.has(key)) {
            cows += Math.min(value, secretMap.get(key));
        }
    }
    return `${bulls}A${cows}B`;
};