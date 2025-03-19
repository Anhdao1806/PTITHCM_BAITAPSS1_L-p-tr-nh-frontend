let login = prompt("Đăng nhập");

if (login == "ADMIN"){
    let password = prompt("Nhập mật khẩu");
    if (password == "TheMaster"){
        alert("Wellcom");
    }
    if( password == ""){
        alert("Cancelled");
    }
    else{
        alert("Wrong password");
    }
}
else if (login == ""){
    alert("Cancelled")
}
else{
    alert("I Don’t know you")
}
