/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let count = new Array(26).fill(0);
    for (let task of tasks) {
        count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++; //[3, 3, 0, 0,...,0]
    }

    let maxHeap = new MaxPriorityQueue();
    for (let i = 0; i < 26; i++) {
        if (count[i] > 0) maxHeap.enqueue(count[i]);
    }

    let time = 0;
    let q = new Queue();

    while (maxHeap.size() > 0 || q.size() > 0) {
        time++;

        if (maxHeap.size() > 0) {
            let cnt = maxHeap.dequeue().element - 1;
            if (cnt !== 0) {
                q.push([cnt, time + n]);
            }
        }

        if (q.size() > 0 && q.front()[1] === time) {
            maxHeap.enqueue(q.pop()[0]);
        }
    }

    return time;
};