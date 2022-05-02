function quickSort(arr,start,end) {
    if (!Array.isArray(arr) || arr.length <= 1 || start < end) return;
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end)
}
function partition(arr, start, end) {
    let pivot = arr[start];
    while (start < end) {
        while (start < end && arr[end] >= pivot) {
            end--
        }
        arr[start] = arr[end]
        while (start < end && arr[start] < pivot) {
            start++
        }
        arr[end] = arr[start]
    }
    arr[start] = pivot
    return start
}
console.log(quickSort([3, 2, 5, 6, 1, 213, 343, 12],3,));