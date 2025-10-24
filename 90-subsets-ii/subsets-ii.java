class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> main = new ArrayList<>();
        main.add(new ArrayList<>());
        int start;
        int end = 0;

        for (int i = 0; i < nums.length; i++) {
            start = 0;
            if (i > 0 && nums[i] == nums[i - 1]) {
                start = end + 1;
            }

            end = main.size() - 1;
            int n = main.size();
            for (int j = start; j < n; j++) {
                List<Integer> internal = new ArrayList<>(main.get(j));
                internal.add(nums[i]);
                main.add(internal);
            }
        }

        return main;
    }
}