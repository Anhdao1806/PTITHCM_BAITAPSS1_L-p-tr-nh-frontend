function primeNumberTest (num){
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}
function xuLyMang(arr){
    let evenNumber = arr.filter(so => primeNumberTest(so));
    let result = evenNumber.filter(so => so % 2 !==0);
    console.log(result);
}
let arr = prompt("Nhập mảng số nguyên: ").split("").map(Number);
if (arr.length === 0) {
    console.log("Mảng không có dữ liệu");
}
else if (!arr.every(so => typeof so === "number" && !isNaN(so))) {
    console.log("Dữ liệu không hợp lệ");
}
else {
    xuLyMang(arr);
}