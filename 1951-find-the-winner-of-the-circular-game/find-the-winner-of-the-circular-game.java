class Solution {
    public int findTheWinner(int n, int k) {
        Deque<Integer> deque = new ArrayDeque<>();

        for (int i = 1; i <= n; i++) {
            deque.offerLast(i);
        }

        while (deque.size() > 1) {
            for (int i = 1; i < k; i++) {
                deque.offerLast(deque.pollFirst());
            }

            deque.removeFirst();
        }

        return deque.peekFirst();
    }
}