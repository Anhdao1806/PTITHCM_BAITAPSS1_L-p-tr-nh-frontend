let month = prompt("Nhập vào số tháng");
month = Number(month);

let day;

switch(month){
    case 1:
        day = "Tháng 1 có 31 ngày";
        break;
    case 2:
        day = "Tháng 2 có 28 ngày hoặc 29 ngày năm nhuận";  
        break;
    case 3: 
        day = "Tháng 3 có 31 ngày";
        break; 
    case 4: 
        day = "Tháng 4 có 30 ngày";
        break;  
    case 5: 
        day = "Tháng 5 có 31 ngày";
        break;  
    case 6: 
        day = "Tháng 6 có 30 ngày";
        break;  
    case 7: 
        day = "Tháng 7 có 31 ngày";
        break;  
    case 8: 
        day = "Tháng 8 có 31 ngày";
        break;  
    case 9: 
        day = "Tháng 9 có 30 ngày";
        break;  
    case 10: 
        day = "Tháng 10 có 31 ngày";
        break; 
    case 11: 
        day = "Tháng 11 có 30 ngày";
        break;  
    case 12: 
        day = "Tháng 12 có 31 ngày";
        break;
    default: 
        day = "Tháng không hợp lệ"  
}
alert(day);