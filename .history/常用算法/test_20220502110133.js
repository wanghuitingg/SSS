function hillSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    for (let gap = parseInt(arr.length >> 1); gap >= 1; gap = parseInt(gap >> 1)) {
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;
            while (j - gap >= 0 && arr[j - gap] > temp) {
                arr[j] = arr[j - gap]
                j -= gap
            }
            arr[j] = temp
        }
    }
    return arr
}
hillSort([7, 6, 3, 2, 1, 4, 9, 8, 0]))