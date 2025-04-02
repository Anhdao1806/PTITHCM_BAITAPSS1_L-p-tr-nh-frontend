function getNumber(){
    let input =prompt("Nhập 2 số nguyên ").split(",").map(Number);
    if (input.length < 2) {
        console.log("Nhập 2 số nguyên");
        return ;
    }
    return input;
}
// Cộng 2 số 
function sum(a,b){
    return a + b;
}
//Trừ 2 số nguyên
function sub(a,b){
    return a - b;
}
//Nhân 2 số 
function mul(a,b){
    return a * b;
}
//Chia 2 số 
function div(a,b){
    if (b === 0) {
        console.log("Không thể chia cho 0");
        return ;
    }
    return a / b;
}

function Menu(){
    let numBer = getNumber();
    if ( numBer === false) return;
    let [a,b] = numBer;
    let choice;

    do {
        choice = Number(prompt(
            "Chọn chức năng:\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát\n" 
        ));
        switch (choice) {
            case 1:
                console.log("Tổng 2 số là: ", sum(a,b));
                break;
            case 2:
                console.log("Hiệu 2 số là: ", sub(a,b));
                break;
            case 3:
                console.log("Tích 2 số là: ", mul(a,b));
                break;
            case 4:
                console.log("Thương 2 số là: ", div(a,b));
                break;
            case 5:
                console.log("Thoát");
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
    }
}   
while (choice !== 5);
}
Menu();

