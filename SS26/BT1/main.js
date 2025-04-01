function xuLyMang(arr){
    for ( let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            console.log("Dữ liệu không hợp lệ");
            return;
        }
    }   
        let result = arr.filter(so => so >= 10);
        if (result.length === 0) {
            console.log("Mảng không có phần tử nào");
        } else {
            console.log(result);
        }
    }
let arr = prompt("Nhập mảng số nguyên: ").split(" ").map(Number);
xuLyMang(arr);