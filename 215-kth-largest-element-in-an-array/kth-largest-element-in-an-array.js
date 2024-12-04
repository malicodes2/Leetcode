/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let maxHeap = new MaxPriorityQueue({ priority: (x) => x });

    for (const num of nums) {
        maxHeap.enqueue(num);
    }

    for (let i = 0; i < k - 1; i++) {
        maxHeap.dequeue().element;
    }

    return maxHeap.dequeue().element;
};