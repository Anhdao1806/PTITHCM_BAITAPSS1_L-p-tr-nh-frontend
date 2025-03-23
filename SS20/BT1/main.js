let tong = 0;
let n = +prompt("Nhập vào số nguyên dương");
 n = Number(n);
if( n > 0){
    for ( let i = 0 ; i <= n ; i++){
        tong += i;
    }
       alert(tong);
}else{
    alert("Dữ liệu nhập vào không hợp lệ");
}