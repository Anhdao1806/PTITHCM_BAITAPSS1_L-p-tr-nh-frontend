let firstNumber = prompt("Nhập số thứ nhất:");
let secondNumber = prompt("Nhập số thứ hai:");
let thirdNumber = prompt("Nhập số thứ ba:");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
thirdNumber = Number(thirdNumber);
let maxNumber = Math.max(firstNumber , secondNumber , thirdNumber )
alert("Số lớn nhất trong 3 số " + firstNumber + ", " + secondNumber + " và " + thirdNumber + " là: " + maxNumber);