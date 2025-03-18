let tiente = Number(prompt('nhập số tiền: '));
let formatVND = tiente.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace("₫", "VND");
document.writeln("Số tiền VND của bạn là: " +  formatVND );
