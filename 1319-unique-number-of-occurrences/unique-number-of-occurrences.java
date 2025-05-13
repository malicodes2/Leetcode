class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer, Integer> occurrences = new HashMap<>();

        for (int num : arr) {
            occurrences.put(num, occurrences.getOrDefault(num, 0) + 1);
        }
        
        HashSet<Integer> uniqueValues = new HashSet(occurrences.values());
        return occurrences.size() == uniqueValues.size();
    }
}