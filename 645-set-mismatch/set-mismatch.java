class Solution {
    public int[] findErrorNums(int[] nums) {
        ArrayList<Integer> resList = new ArrayList<>();

        int i = 0;
        while (i < nums.length) {
            int correct = nums[i] - 1;
            if (nums[i] != nums[correct]) {
                swap(nums, i, correct);
            } else {
                i++;
            }
        }

        for (int idx = 0; idx < nums.length; idx++) {
            if (nums[idx] != idx + 1) {
                resList.add(nums[idx]);
                resList.add(idx + 1);
            }
        }

        int[] res = new int[resList.size()];
        for (int j = 0; j < resList.size(); j++) {
            res[j] = resList.get(j);
        }

        return res;
    }

    void swap(int[] nums, int first, int second) {
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    }
}