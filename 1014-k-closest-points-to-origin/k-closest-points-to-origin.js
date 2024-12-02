/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const minHeap = new MinPriorityQueue({ priority: (squareSum) => squareSum[0] });
    const res = [];

    for (const [x, y] of points) {
        let dist = x ** 2 + y ** 2;
        minHeap.enqueue([dist, x, y]);
    }

    for (let i = 0; i < k; i++) {
        const { element } = minHeap.dequeue();
        const [_, x, y] = element;
        res.push([x, y]);
    }

    return res;
};