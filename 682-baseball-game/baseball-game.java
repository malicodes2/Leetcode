class Solution {
    public int calPoints(String[] operations) {
        Stack<Integer> score = new Stack<>();

        for(String s : operations) {
            if (s.equals("+")) {
                int top = score.pop();
                int secondTop = score.peek();
                score.push(top);
                score.push(top + secondTop);
            } else if (s.equals("D")) {
                int prev = score.peek();
                score.push(prev * 2);
            } else if (s.equals("C")) {
                score.pop();
            } else {
                score.push(Integer.parseInt(s));
            }
        }

        int sum = 0;
        for (int num : score) {
            sum += num;
        }

        return sum;
    }
}