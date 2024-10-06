/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    const splitWords = (sentence) => {
        return sentence.split(" ");
    }

    let wordsOne = splitWords(sentence1), wordsTwo = splitWords(sentence2);

    if (wordsOne.length < wordsTwo.length) {
        [wordsOne, wordsTwo] = [wordsTwo, wordsOne];
    }

    let forward = 0, backward = 0;
    let nOne = wordsOne.length, nTwo = wordsTwo.length;

    while (forward < nTwo && wordsOne[forward] == wordsTwo[forward]) {
        forward++;
    }

    while (backward < nTwo && wordsOne[nOne - backward - 1] == wordsTwo[nTwo - backward - 1]) {
        backward++;
    }

    return forward + backward >= nTwo;
};