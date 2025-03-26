let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let input = Number(prompt("Nhập số bạn muốn kiểm tra"));
let count = 0;
let i = 0;
while (i < numbers.length) {
    if (numbers[i] === input) {
        count++;
    }
    i++;
}
if (count > 0) {
    console.log("số "+input+" xuất hiện "+count+" lần trong mảng");
}
else {
    console.log("số "+input+" không tồn tại trong mảng");
}