/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let ptrOne = 0;
    let ptrTwo = 0;
    let lengthOne = version1.length;
    let lengthTwo = version2.length;

    while (ptrOne < lengthOne || ptrTwo < lengthTwo) {
        let revOne = 0, revTwo = 0;

        while (ptrOne < lengthOne && version1[ptrOne] != '.') {
            revOne = revOne * 10 + (version1[ptrOne] - '0');
            ptrOne++;
        }
        while (ptrTwo < lengthTwo && version2[ptrTwo] != '.') {
            revTwo = revTwo * 10 + (version2[ptrTwo] - '0');
            ptrTwo++;
        }
        if (revOne < revTwo) {
            return -1;
        }
        else if (revOne > revTwo) {
            return 1;
        }
        ptrOne++;
        ptrTwo++
    }
    return 0;
};