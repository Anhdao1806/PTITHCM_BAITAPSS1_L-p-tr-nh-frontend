let num = prompt("Nhập 5 số bất kì ");

if (isNaN(num)) {
    console.log("Nhập sai")
} else {
    let arr = num.split("");

let ketQua = arr.reverse();

console.log(ketQua);
}