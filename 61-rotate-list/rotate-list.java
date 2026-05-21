/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }

        ListNode temp = head;
        int length = 1;

        while (temp.next != null) {
            temp = temp.next;
            length++;
        }

        int actualK = k % length;

        if (actualK == 0) {
            return head;
        }

        ListNode breakNode = head;
        ListNode newHead;
        for (int i = 0; i < length - actualK - 1; i++) {
            breakNode = breakNode.next;
        }

        newHead = breakNode.next;
        breakNode.next = null;
        temp.next = head;

        return newHead;
    }
}