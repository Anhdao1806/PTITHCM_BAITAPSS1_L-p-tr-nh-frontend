let day1 = new Date(prompt('Nhập số ngày thứ nhất: '));// Định dạng YYYY-MM-DD
let day2 = new Date (prompt('Nhập số ngày thứ hai: '));// Định dạng YYYY-MM-DD

// tinh so ngay chenh lech nhưng có cả mili giây phải đổi sang ngày
let Songaychenhlechmiligiay = day2 - day1;  

// đổi từ mili giây sang ngày
let Songaychenhlechngay = Songaychenhlechmiligiay/ (1000*60*60*24);

document.writeln("Chênh lệch: " + Math.abs(Songaychenhlechngay) + " ngày");
