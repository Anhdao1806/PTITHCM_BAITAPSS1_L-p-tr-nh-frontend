let arr = [1,11,2008,12,13,2,3,4,5,6,];
let n = arr.length;
if( n === 0){
    console.log("không có số lớn nhất");
}else{
    let max = arr[0];
    let index = 0;
    for (let i = 1 ; i < n ; i++){
        if (arr[i] > max){
            max = arr[i];
            index = i;
        }
    }
    console.log("Số lớn nhất : " + max);
    console.log("Vị trí :" + index)
}