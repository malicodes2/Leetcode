/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let res = [];
    while (head != null) {
        res.push(head.val);
        head = head.next;
    }

    let n = res.length;

    for (let i = 0; i < n / 2; i++) {
        if (res[i] != res[n - i - 1]) {
            return false;
        }
    }
    return true;
};