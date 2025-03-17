let  startNumber = prompt("Nhập số bắt đầu");
let endNumber = prompt("Nhập số kết thúc");
let random = Math.floor(Math.random()*(endNumber - startNumber)+startNumber)
document.write("Số ngẫu nhiên từ khoảng " +startNumber +" đến " +endNumber +" : " + Number(random));