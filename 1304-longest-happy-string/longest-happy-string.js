/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
function longestDiverseString(a, b, c) {
    // Create a max priority queue with a custom comparison function
    // that orders elements by the first value of the tuple (the count).
    const pq = new MaxPriorityQueue({
        compare: (x, y) => y[0] - x[0]  // Ensures the largest count (max) is at the front
    });

    // Add each character ('a', 'b', 'c') to the priority queue with its respective count,
    // only if the count is greater than 0 (so we don't push unused characters).
    if (a > 0) pq.enqueue([a, 'a']);
    if (b > 0) pq.enqueue([b, 'b']);
    if (c > 0) pq.enqueue([c, 'c']);

    let res = "";  // Initialize an empty string to store the result

    // Continue building the result while there are characters left in the priority queue
    while (!pq.isEmpty()) {
        // Get the character with the highest count (char1) from the queue
        let [count1, char1] = pq.dequeue(); // Dequeue the element with the highest count

        // If the last two characters in the result are the same as char1, we must use a different character
        if (res.length > 1 && res[res.length - 1] === char1 && res[res.length - 2] === char1) {
            // If there's no other character to use, we break and stop building the string
            if (pq.isEmpty()) break;

            // Get the next highest character (char2) from the queue
            let [count2, char2] = pq.dequeue();

            // Append this second character (char2) to the result
            res += char2;
            count2--;  // Decrease the count of this character since we've used it

            // If char2 still has remaining count, add it back to the priority queue
            if (count2 > 0) pq.enqueue([count2, char2]);

            // Now, add char1 back into the queue as we skipped it in this round
            pq.enqueue([count1, char1]);

        } else {
            // If the last two characters are NOT the same as char1, we can safely use char1
            res += char1;
            count1--;  // Decrease the count of char1 as we've used it

            // If char1 still has remaining count, add it back to the priority queue
            if (count1 > 0) pq.enqueue([count1, char1]);
        }
    }

    // Return the resulting diverse string
    return res;
}