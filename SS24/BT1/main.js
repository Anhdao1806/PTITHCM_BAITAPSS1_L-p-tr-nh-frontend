let arr = [];

let choice;
do {
    choice = prompt(`
        Chọn chức năng:
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
    `);

    switch (choice) {
        case '1':
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

        case '2': 
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

        case '3':
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let min = arr[0];
                let max = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] < min) {
                        min = arr[i];
                    }
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                }
                alert(`Phần tử nhỏ nhất: ${min}\nPhần tử lớn nhất: ${max}`);
            }
            break;

        case '4':
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                alert("Tổng các phần tử trong mảng: " + sum);
            }
            break;

        case '5':
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                let num = Number(prompt("Nhập phần tử cần tìm số lần xuất hiện:"));
                if (isNaN(num)) {
                    alert("Vui lòng nhập số hợp lệ!");
                } else {
                    let count = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === num) {
                            count++;
                        }
                    }
                    alert(`Phần tử ${num} xuất hiện ${count} lần.`);
                }
            }
            break;

        case '6': 
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                let sortedStr = "";
                for (let i = 0; i < arr.length; i++) {
                    sortedStr += arr[i];
                    if (i < arr.length - 1) {
                        sortedStr += ", ";
                    }
                }
                alert("Mảng sau khi sắp xếp: " + sortedStr);
            }
            break;

        case '7': 
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== '7');