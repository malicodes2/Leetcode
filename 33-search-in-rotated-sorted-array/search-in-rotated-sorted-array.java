class Solution {
    int search(int[] arr, int target) {
        int pivot = findPivot(arr);

        //if you can't find the pivot it means the array is not rotated.
        if (pivot == -1) {
            // just apply normal binary search
            return binarySearch(arr, target, 0, arr.length - 1);
        }

        //if pivot is found, you have found 2 ascending sorted arrays
        // Case 1
        if (arr[pivot] == target) {
            return pivot;
        }

        if (target >= arr[0]) {
            return binarySearch(arr, target, 0, pivot - 1);
        }
        return binarySearch(arr, target, pivot + 1, arr.length - 1);
    }

    int findPivot(int[] arr) {
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;

            // Case 1
            if (mid < end && arr[mid] > arr[mid + 1]) {
                return mid;
            }
            // Case 2
            if (mid > start && arr[mid] < arr[mid - 1]) {
                return mid - 1;
            }
            // Case 3
            if (arr[mid] <= arr[start]) {
                end = mid - 1;
            }
            // Case 4
            else {
                start = mid + 1;
            }
        }
        return -1;
    }

    int binarySearch(int[] arr, int target, int start, int end) {
        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (target > arr[mid]) {
                start = mid + 1;
            } else if (target < arr[mid]) {
                end = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}