// function quickSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return;
//     let pivotIndex = Math.floor(arr.length/2)
//     let pivot = arr.splice(pivotIndex,1)[0];
//     let left = [],right=[];

// }
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
let a
console.log(quickSort([3, 2, 5, 6, 1, 213, 343, 12]));