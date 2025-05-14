class Solution {
    public int findTheWinner(int n, int k) {
        int initialPos = 0;
        ArrayList<Integer> people = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
            people.add(i);
        }

        while (people.size() > 1) {
            initialPos = (initialPos + k - 1) % people.size();
            people.remove(initialPos);
        }
        return people.get(0);
    }
}