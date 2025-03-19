
let year = prompt("Nhập số năm làm việc");
year = Number(year);
if (year <= 1){
    alert("Mới vào nghề");
}
else if ( year > 1 && year <= 3 ) {
    alert("Nhân viên có kinh nghiệm");
}
else if ( year >= 4 && year <= 6){
    alert("Chuyên viên");
}
else { 
    alert("Quản lý");
}