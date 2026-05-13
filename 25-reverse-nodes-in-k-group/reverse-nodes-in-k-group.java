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
    public ListNode reverseKGroup(ListNode head, int k) {
        if (k <= 1 || head == null) {
            return head;
        }

        // Skip the first Left - 1 nodes.
        ListNode curr = head;
        ListNode prev = null;

        while (true) {

            ListNode temp = curr;
            int count = 0;

            while (temp != null && count < k) {
                temp = temp.next;
                count++;
            }

            if (count < k) {
                break;
            }

            ListNode last = prev;
            ListNode newEnd = curr;

            // Reverse b/w left and right
            ListNode next = curr.next;
            for (int i = 0; curr != null && i < k; i++) {
                curr.next = prev;
                prev = curr;
                curr = next;
                if (next != null) {
                    next = next.next;
                }
            }

            if (last != null) {
                last.next = prev;
            } else {
                head = prev;
            }

            newEnd.next = curr;
            if (curr == null) {
                break;
            }

            prev = newEnd;
        }
        return head;
    }
}