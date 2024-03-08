/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while (curr && curr.next) {
        // saving ptrs
        let nextPair = curr.next.next;
        let sec = curr.next;

        // reversing
        sec.next = curr;
        curr.next = nextPair;
        prev.next = sec;

        // update
        prev = curr;
        curr = nextPair;
    }

    return dummy.next;
};