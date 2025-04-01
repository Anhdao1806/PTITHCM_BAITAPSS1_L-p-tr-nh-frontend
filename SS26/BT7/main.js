
function xuLyMang(arr){
    let numberSquare = arr.map(so => so * so);
    let evenNumber = numberSquare.filter(so => so % 2 === 0);
    console.log(evenNumber);
    }
let arr = prompt("Nhap mang so nguyen: ").split("").map(Number);
if ( arr.length === 0) {
    console.log("Mang khong co dữ liệu");
}
else if (!arr.every(so => typeof so === "number" && !isNaN(so))) {
        console.log("Du lieu khong hop le");
}
else {
    xuLyMang(arr);
}