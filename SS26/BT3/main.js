function checkEmail(email){
    return email.includes("@") && !email.includes(" ");
}
function xuLyMang(arr){
    let result = arr.filter (email => checkEmail(email));
    if ( result.length === 0){
        console.log("Mảng không có phần tử nào");
    }else{
            console.log(result);
        }
}
let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
xuLyMang(arr);