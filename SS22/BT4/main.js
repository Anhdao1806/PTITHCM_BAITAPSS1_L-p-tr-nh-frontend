let input = prompt("Nhập dãy số bất kì");
let arr = input.split('');
let length = arr.length;
if (length > 0) {
    console.log(length + " là số lớn nhất trong dãy số");
} else {
    console.log("dãy số không hợp lệ");
}