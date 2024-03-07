/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    const jewelsObj = {};
    for (const jewel of jewels) {
        jewelsObj[jewel] = true
    }

    for (const stone of stones) {
        if (stone in jewelsObj) {
            count++
        }
    }
    return count;
};