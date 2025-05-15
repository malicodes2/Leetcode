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

        int[] result = new int[stack.size()];
        for (int i = 0; i < result.length; i++) {
            result[i] = stack.get(i); 
        }

        return result;
    }
}