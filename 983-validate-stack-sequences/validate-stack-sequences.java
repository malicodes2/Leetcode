class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> nums = new Stack<>();

        int i = 0;
        for (int num : pushed) {
            nums.push(num);
            while (!nums.isEmpty() && nums.peek() == popped[i]) {
                nums.pop();
                i++;
            }
        }

        return nums.isEmpty();
    }
}