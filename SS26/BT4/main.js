function laSoNguyenTo(so) {
    if (so < 2) return false;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) return false;
    }
    return true;
}
function xuLyMang(arr) {
        let result = arr.filter(so => laSoNguyenTo(so));
        if (result.length === 0) {
            console.log("Mang khong co phan tu nao");
        } else {
            console.log(result);
        }
    }
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
xuLyMang(arr);