function quickSort(arr) {
    if(!Array.isArray(arr)||arr.length<=1||start<end) return;
    let index 
}
function partition(arr,start,end) {
    let pivot = arr[start];
    while (start<end) {
        while (start<end&&arr[end]>pivot) {
            end--
        }
        arr[start] = arr[end]
        while (start<end&&arr[start]<pivot) {
            start++
        }
        arr[end]
    }
}