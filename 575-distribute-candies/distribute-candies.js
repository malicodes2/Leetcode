/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let hash = new Map();

    for(let i = 0; i < candyType.length; i++) {
        if(!hash.has(candyType[i])) {
            hash.set(candyType[i], 1);
        }
    }

    let types = hash.size;
    let n = candyType.length;
    let allowedCandies = n / 2;

    if(allowedCandies >= types) {
        return types;
    }
    else {
        return allowedCandies;
    }
};