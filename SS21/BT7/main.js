let deposit = Number(prompt("Nhập số tiền gửi ban đầu"));
let interestRate = prompt("Nhập lãi suất");
let month = prompt("Nhập số tháng muốn gửi");

let moneyReceived = deposit 
for (let i = 0; i < month; i++) {
    moneyReceived += moneyReceived * (interestRate / 100);
}
let interest = moneyReceived - deposit ;

console.log("Tiền lãi :"+interest);
console.log("Tiền nhận được :"+moneyReceived);