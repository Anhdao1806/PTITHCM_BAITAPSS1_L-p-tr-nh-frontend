let arr =[];
let n = Number(prompt("Nhập số phần tử của mảng"));
if ( n === 0 ){
    console.log("Không có kí tự số");
}
else{
    let input;
    for (let i = 0 ; i < n ; i++){
    input  = prompt("Nhập phần tử cho mảng");
    arr.push(input);
    }
}
let count = 0;
let arr2 = [];
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] >= '0' && arr[i] <= '9'){
        count++;
        arr2.push(arr[i]);
    }
}
 console.log(arr2);