class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Populating Hashmap
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Conversion to List and Sorting in Descending
        List<Map.Entry<Integer, Integer>> entryList = new ArrayList<>(map.entrySet());
        entryList.sort((a, b) -> b.getValue() - a.getValue());

        // Looping to get the most frequent elements
        ArrayList<Integer> result = new ArrayList<>();

        int i = 0;
        while (i < k) {
            result.add(entryList.get(i).getKey());
            i++;
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}