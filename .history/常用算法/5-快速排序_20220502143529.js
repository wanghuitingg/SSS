function quickSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    var pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex,1)[0];
    let left = [],right=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<=pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    // return quickSort(left).concat([pivot],quickSort(right))
    return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort([3, 2, 5, 6, 1, 213, 343, 12]));