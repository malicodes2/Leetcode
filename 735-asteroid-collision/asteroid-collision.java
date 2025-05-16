class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();

        for (int val : asteroids) {
            while (!stack.isEmpty() && val < 0 && stack.peek() > 0) {
                int diff = val + stack.peek();
                if (diff > 0) {
                    val = 0;
                } else if (diff < 0) {
                    stack.pop();
                } else {
                    val = 0;
                    stack.pop();
                }
            }

            if (val != 0) {
                stack.push(val);
            }
        }

        return stack.stream().mapToInt(i -> i).toArray();
    }
}