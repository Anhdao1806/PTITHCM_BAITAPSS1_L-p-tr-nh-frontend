let numbers = [2, 5, 7, 4, 1, 8, 6];
let input = Number(prompt("Nhập số bạn muốn kiểm tra"));
for (let key in numbers){
    if (numbers[key] === input){
        console.log("Bingo");
        break;
    }
    else{
        console.log("Chúc bạn may mắn lần sau");
        break;
    }
}