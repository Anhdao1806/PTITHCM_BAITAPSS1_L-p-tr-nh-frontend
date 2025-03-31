let arr = [];

let choice;
do {
    choice = prompt(`
        Chọn chức năng:
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xoá phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
        7. Thoát chương trình
    `);

    switch (choice) {
        case '1': // Nhập mảng
            let input = prompt("Nhập các phần tử mảng, cách nhau bằng dấu ',' (ví dụ: 1,2,3,4):");
            arr = input.split(',').map(Number);
            let hasInvalid = false;
            for (let i = 0; i < arr.length; i++) {
                if (isNaN(arr[i])) {
                    hasInvalid = true;
                    break;
                }
            }
            if (hasInvalid) {
                alert("Vui lòng nhập đúng các số nguyên!");
                arr = [];
            } else {
                alert("Mảng đã được nhập thành công.");
            }
            break;

        case '2': // Hiển thị mảng
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let displayStr = "";
                for (let i = 0; i < arr.length; i++) {
                    displayStr += arr[i];
                    if (i < arr.length - 1) {
                        displayStr += ", ";
                    }
                }
                alert("Mảng hiện tại: " + displayStr);
            }
            break;

        case '3': // Tìm các phần tử chẵn và lẻ
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let evenStr = "";
                let oddStr = "";
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        if (evenStr !== "") {
                            evenStr += ", ";
                        }
                        evenStr += arr[i];
                    } else {
                        if (oddStr !== "") {
                            oddStr += ", ";
                        }
                        oddStr += arr[i];
                    }
                }
                alert(`Các số chẵn trong mảng: ${evenStr || "Không có"}\nCác số lẻ trong mảng: ${oddStr || "Không có"}`);
            }
            break;

        case '4': // Tính trung bình cộng của mảng
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                let average = sum / arr.length;
                alert(`Trung bình cộng của mảng: ${average}`);
            }
            break;

        case '5': // Xoá phần tử tại vị trí chỉ định
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let index = parseInt(prompt("Nhập vị trí muốn xoá:"));
                if (isNaN(index) || index < 0 || index >= arr.length) {
                    alert("Vị trí không hợp lệ!");
                } else {
                    for (let i = index; i < arr.length - 1; i++) {
                        arr[i] = arr[i + 1];
                    }
                    arr.length = arr.length - 1; // Giảm độ dài mảng
                    alert("Phần tử đã được xoá.");
                }
            }
            break;

        case '6': // Tìm phần tử lớn thứ hai trong mảng
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else if (arr.length === 1) {
                alert("Mảng chỉ có một phần tử, không có phần tử lớn thứ hai.");
            } else {
                let max = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                }
                let secondMax = -Infinity;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < max && arr[i] > secondMax) {
                        secondMax = arr[i];
                    }
                }
                if (secondMax === -Infinity) {
                    alert("Không tìm thấy phần tử lớn thứ hai (các phần tử bằng nhau).");
                } else {
                    alert(`Phần tử lớn thứ hai trong mảng: ${secondMax}`);
                }
            }
            break;

        case '7': // Thoát chương trình
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== '7');