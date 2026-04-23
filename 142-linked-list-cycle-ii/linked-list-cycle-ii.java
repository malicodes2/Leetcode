/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public int lengthCycle(ListNode head) {
        int length = 0;
        ListNode fast = head;
        ListNode slow = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (fast == slow) {
                // calculate the length
                ListNode temp = slow;
                do {
                    temp = temp.next;
                    length++;
                } while (temp != slow);

                return length;
            }
        }

        return 0;
    }

    public ListNode detectCycle(ListNode head) {

        int length = lengthCycle(head);

        if  (length == 0) {
            return null;
        }

        // find the start node
        ListNode f = head;
        ListNode s = head;

        while (length > 0) {
            s = s.next;
            length--;
        }

        // keep moving both forward and they'll meet at start of the cycle
        while (f != s) {
            f = f.next;
            s = s.next;
        }
        return f;
    }
}