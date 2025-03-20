let so = prompt("Nhập số muốn kiểm tra");
so = Number(so);

if( so % 3 === 0 && so % 5 === 0){
    alert(+so+" chia hết cho cả 3 và 5 ");
}
else{
    alert(+so+" không chia hết cho cả 3 và 5");
}