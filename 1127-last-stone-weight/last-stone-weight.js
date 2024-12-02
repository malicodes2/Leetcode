/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxHeap = new MaxPriorityQueue({ priority: (weight) => weight });

    for (const stone of stones) {
        maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
        const stoneOne = maxHeap.dequeue().element;
        const stoneTwo = maxHeap.dequeue().element;

        if (stoneOne !== stoneTwo) {
            maxHeap.enqueue(stoneOne - stoneTwo);
        }
    }

    return maxHeap.size() === 1 ? maxHeap.dequeue().element : 0;
};