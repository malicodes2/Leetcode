/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let boat = 0;
    let left = 0;
    let right = people.length - 1;
    people.sort(function (a, b) {
        return a - b;
    });
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
            boat++;
        }
        else {
            right--;
            boat++
        }
    }
    return boat;
};