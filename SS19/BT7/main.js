let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));
let c =Number(prompt("Nhập số c"));
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert(" Số lớn nhất trong ba số "+a+" "+b+" "+c+" là "+max)