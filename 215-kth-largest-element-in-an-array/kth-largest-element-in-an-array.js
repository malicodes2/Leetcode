/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let minHeap = new MinPriorityQueue({ priority: (x) => x });

    for (const num of nums) {
        minHeap.enqueue(num);
    }

    while (minHeap.size() > k) {
        minHeap.dequeue().element;
    }

    return minHeap.dequeue().element;
};