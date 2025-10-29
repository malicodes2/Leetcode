class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for (int n : nums) list.add(n);

        return permutations(new ArrayList<>(), list);
    }

    static List<List<Integer>> permutations(List<Integer> arr, List<Integer> nums) {
        List<List<Integer>> main = new ArrayList<>();

        if (nums.isEmpty()) {
            main.add(new ArrayList<>(arr));
            return main;
        }

        int num = nums.get(0);
        List<Integer> rest = nums.subList(1, nums.size());

        for (int i = 0; i <= arr.size() ; i++) {
            List<Integer> newArr = new ArrayList<>(arr);
            newArr.add(i, num);
            main.addAll(permutations(newArr, new ArrayList<>(rest)));
        }

        return main;
    }
}