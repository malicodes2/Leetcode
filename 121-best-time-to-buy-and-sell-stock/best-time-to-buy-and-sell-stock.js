/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let [left, right, max] = [0, 1, 0];

    while (right < prices.length) {
        if (prices[right] <= prices[left]) {
            left = right;
        }
        let profit = prices[right] - prices[left];
        max = Math.max(max, profit);
        right++;
    }
    return max;
};