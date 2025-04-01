function xuLyMang (arr){
//    if( array.isArray(arr) == false){
//        console.log("Dữ liệu không hợp lệ");
//        return;
//    }
    let result = arr.filter (chuoi => chuoi.length > 5);
    if ( result.length === 0){
        console.log("Mảng không có phần tử nào");
    }else{
        console.log(result);
    }
}
let arr = ["apple", "banana", "orange", "kiwi", "mango"];
xuLyMang(arr);