let so = prompt("Nhập số từ 0 -> 9");
so = Number(so);
let cachDoc;
switch(so) {
    case 0:
        cachDoc = "Số Không";
        break;
    case 1:
        cachDoc = "Số Một";
        break;
    case 2:
        cachDoc = "Số Hai";
        break;
    case 3:
        cachDoc = "Số Ba";
        break;
    case 4:
        cachDoc = "Số Bốn";
        break;
    case 5:
        cachDoc = "Số Năm";
        break;
    case 6:
        cachDoc = "Số Sáu";
        break;
    case 7:
        cachDoc = "Số Bảy";
        break;
    case 8:
        cachDoc = "Số Tám";
        break;
    case 9:
        cachDoc = "Số Chín";
        break;
}
alert("Số " + so + " đọc là: " +cachDoc);