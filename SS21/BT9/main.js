let so =Number(prompt("Nhập số bạn muốn kiểm tra"));
if ( so < 2){
    alert("Giá trị không hợp lệ")
}else{
    flag = 1;
    for ( let i = 2 ; i < so - 1 ; i++){
        if (so % i === 0){
            flag = 0;
            break;
        }
    }
    if(flag === 1){
        alert(so +" Là số nguyên tố");
    }
    else{
        alert(so+" Không phải là số nguyên tố");
    }
}