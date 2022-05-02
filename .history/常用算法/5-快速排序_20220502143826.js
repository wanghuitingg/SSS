function quickSort(arr) {
    // if (!Array.isArray(arr) || arr.length <= 1) return;
    if(arr.length<=1){return arr;}
    let pivotIndex = Math.floor(arr.length/2)
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
}
// function quickSort(arr){
//     //如果数组<=1,则直接返回
//     if(arr.length<=1){return arr;}
//     var pivotIndex=Math.floor(arr.length/2);
//     //找基准，并把基准从原数组删除
//     var pivot=arr.splice(pivotIndex,1)[0];
//     //定义左右数组
//     var left=[];
//     var right=[];
//     //比基准小的放在left，比基准大的放在right
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<=pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     //递归
//     return quickSort(left).concat([pivot],quickSort(right));
// }
console.log(quickSort([3, 2, 5, 6, 1, 213, 343, 12]));