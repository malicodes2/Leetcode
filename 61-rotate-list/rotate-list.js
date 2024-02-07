/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) {
        return head;
    }

    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k == 0) {
        return head;
    }

    let cur = head;
    for (let i = 0; i < length - k - 1; i++) {
        cur = cur.next;
    }
    let newHead = cur.next;
    cur.next = null;
    tail.next = head;
    return newHead;
};