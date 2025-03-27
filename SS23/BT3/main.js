let arr =[];
let n = Number(prompt("Nhập số phần tử của mảng"));
if ( n < 0 ){
    console.log("Số lượng phần tử không hợp lệ");
}else if ( n === 0){
    console.log("Mảng không có phần tử");
}
else{
    let input;
    for (let i = 0 ; i < n ; i++){
    input  = Number(prompt("Nhập phần tử cho mảng"));
    arr.push(input);
    }
}
let count = 0;
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] < 0 ){
        count++;
    }
}
 console.log(count);