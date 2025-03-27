let arr = [1,11,2008,12,13,2,3,4,5,6,];
let count = 0;
let soLonHon10 = "";
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] >= 10){
        count++;
        soLonHon10 += arr[i]+",";
    }
}
if( count > 0){
    console.log(soLonHon10);
}else {
    console.log("Không có số nào lớn hơn 10");
}