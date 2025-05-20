class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        ArrayList<Integer> res = new ArrayList<>();

        for (int num : nums) {
            if (num < pivot) res.add(num);
        }

        for (int num : nums) {
            if (num == pivot) res.add(num);
        }

        for (int num : nums) {
            if (num > pivot) res.add(num);
        }

        return res.stream().mapToInt(i -> i).toArray();
    }
}