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
var swapNodes = function (head, k) {
    let length = 0;
    let curr = head;

    while (curr != null) {
        length++;
        curr = curr.next;
    }

    curr = head;
    for (let i = 1; i < k; i++) {
        curr = curr.next;
    }
    let start = curr;

    curr = head;
    for (let i = 1; i < length - k + 1; i++) {
        curr = curr.next;
    }
    let end = curr;

    let temp = start.val;
    start.val = end.val;
    end.val = temp;

    return head;
};