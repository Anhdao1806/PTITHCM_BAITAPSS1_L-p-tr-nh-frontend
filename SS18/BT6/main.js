let year = prompt("Nhập số năm");
year = Number(year);
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    alert(year+" Là năm nhuận");
}
else{
    alert(year+" Không phải là năm nhuận");
}