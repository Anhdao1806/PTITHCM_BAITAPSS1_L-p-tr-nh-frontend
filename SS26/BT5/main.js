function xuLyMang(arr) {
    if (mang.length === 0) {
        console.log("Mang ko co du lieu");
        return;
    }
    let max = arr[0];
    // let position = 0;
    for (let i = 1; i < mang.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
        // position = i;
        }
    } 
    let position = arr.findIndex(so => so === max);
    console.log('max = ', max);
    console.log('position = ', position);
}

let mang = prompt("Nhap mang so nguyen: ").split(",").map(Number);
xuLyMang(mang);