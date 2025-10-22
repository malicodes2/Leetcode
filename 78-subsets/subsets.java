class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> main = new ArrayList<>();
        main.add(new ArrayList<>());

        for (int num : nums) {
            int n = main.size();
            for (int i = 0; i < n; i++) {
                List<Integer> internal = new ArrayList<>(main.get(i));
                internal.add(num);
                main.add(internal);
            }
        }

        return main;
    }
}