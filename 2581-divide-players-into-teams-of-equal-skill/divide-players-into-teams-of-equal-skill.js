/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    let arrSorted = skill.sort((a, b) => a - b)
    let left = 0;
    let right = arrSorted.length - 1;
    let totalChemistry = 0;
    let targetSum = arrSorted[left] + arrSorted[right];

    while (left < right) {
        let currentSum = arrSorted[left] + arrSorted[right];
        if (currentSum !== targetSum) {
            return -1;
        }
        totalChemistry += arrSorted[left] * arrSorted[right];
        left++;
        right--;
    }

    return totalChemistry;
};