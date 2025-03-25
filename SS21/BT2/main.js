let numEven = 0;
let numOdd = 0;
for ( let i = 0 ; i < 5 ; i++){
let num = Number(prompt("Nhập 5 số nguyên"));
if(isNaN(num)){
    console.log("Số không hợp lệ")
}
if(num % 2 === 0){
    numEven++;
}else{
    numOdd++; 
}
}
console.log("Số lượng số chẵn: "+numEven);
console.log("Số lượng số lẻ: " +numOdd);