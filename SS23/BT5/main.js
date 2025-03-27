let arr =[];
let n = Number(prompt("Nhập số phần tử của mảng"));
if ( n === 0 ){
    console.log("Mảng không có phàn tử");
}
else if ( n < 0 ){
    console.log("Số lượng phần tử không được âm");
}
else{
    let input;
    for (let i = 0 ; i < n ; i++){
    input  = prompt("Nhập phần tử cho mảng");
    arr.push(input);
    }
}
let sum = 0;
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] >= '0' && arr[i] <= '9'){
        sum += Number(arr[i]);
    }
}
 console.log(sum);