/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid, arr.length));
    return merge(left, right);
};

const merge = (first, second) => {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            result[k] = first[i];
            i++;
        } else {
            result[k] = second[j];
            j++;
        }
        k++;
    }

    while (i < first.length) {
        result[k] = first[i];
        i++;
        k++;
    }

    while (j < second.length) {
        result[k] = second[j];
        j++;
        k++;
    }
    
    return result;
}