function mergeSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let mid = parseInt(length >> 1), 
    left = arr.slice(0, mid), 
    right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right))
}

function marge(leftArr, rightArr) {
    let result = [],il = 0,ir = 0;
    while (il<leftArr.length&&ir<rightArr.length) {
        if (leftArr[il]<rightArr[ir]) {
            result.push(leftArr[il++])
        }else{
            result.push(rightArr)
        }
    }
}