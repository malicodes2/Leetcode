class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i]; // 9 - 2 = 7, 9 -7 = 2

            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), i };
            }

            map.put(nums[i], i);
        }
        return null;
    }
}