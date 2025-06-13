class Solution {
    public boolean canMeasureWater(int x, int y, int target) {
        if (x + y < target) return false;

        return target % gcd(x, y) == 0;
    }

    private static int gcd(int a, int b) {
        if (a == 0) return b;
        return gcd(b % a, a);
    }
}