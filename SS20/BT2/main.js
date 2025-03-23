
let n = +prompt("Nhập vào số nguyên dương");
 n = Number(n);
 if( isNaN(n) || n<=0){
    alert("Dữ liệu nhập vào không hợp lệ");
 }else{
    for( let i = 1 ; i<=n ; i++ ){
        if (i % 5 === 0){
            document.writeln(i)
        }
    }
 }