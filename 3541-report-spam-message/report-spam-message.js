/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function (message, bannedWords) {
    let hash = new Map();
    let count = 0;

    for (let word of bannedWords) {
        hash.set(word, 1);
    }

    for (let i = 0; i < message.length; i++) {
        if (hash.has(message[i])) {
            count++;
        }
    }

    if (count >= 2) {
        return true;
    } else {
        return false;
    }
};