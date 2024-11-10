/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    const oldToCopy = new Map();
    oldToCopy.set(null, null);

    let cur = head;
    while (cur !== null) {
        if (!oldToCopy.has(cur)) {
            oldToCopy.set(cur, new Node(0));
        }
        oldToCopy.get(cur).val = cur.val;
        if (!oldToCopy.has(cur.next)) {
            oldToCopy.set(cur.next, new Node(0));
        }
        oldToCopy.get(cur).next = oldToCopy.get(cur.next);
        if (!oldToCopy.has(cur.random)) {
            oldToCopy.set(cur.random, new Node(0));
        }
        oldToCopy.get(cur).random = oldToCopy.get(cur.random);
        cur = cur.next;
    }
    return oldToCopy.get(head);
}