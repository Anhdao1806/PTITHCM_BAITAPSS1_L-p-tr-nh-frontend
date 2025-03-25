
let sum = 0;
for ( let i = 0 ; i < 5 ; i++){
let num = Number(prompt("Nhập 5 số nguyên"))
if(isNaN(num)){
    console.log("Số không hợp lệ")
}
if(num % 2 !== 0){
    sum += num;

}
}
console.log("Tổng các số lẻ "+sum);
