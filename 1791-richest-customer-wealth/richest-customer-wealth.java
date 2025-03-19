class Solution {
    public int maximumWealth(int[][] accounts) {
        int max = 0;
        for (int[] row : accounts) {
            int sum = 0;
            for (int col : row) {
                sum += col;
            }
            max = Math.max(sum, max);
        }
        return max;
    }
}