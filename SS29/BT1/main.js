let contact =[];
//hàm thêm liên hệ
function addContact(id,name,email,phone) {
    let contactItem = {
        id: id,
        name: name,
        email: email,
        phone: phone
    }
    contact.push(contactItem);
}
//hàm hiển thị liên hệ
function showContact() {
    if (contact.length == 0) {
        console.log("Không có liên hệ nào");
        return;
    }else{ console.table(contact);}
}
//hàm tìm kiếm thông tin theo số điện thoại
function findContact(phone){
    let flag = false;
    for ( let i = 0 ; i < contact.length ; i++){
        if (contact[i].phone === phone){
            console.log(contact[i]);
            flag = true;
            break;
        }
    }
    if (flag == false){
        console.log("Không tìm thấy liên hệ nào");
    }
}
//hàm cập nhật thông tin theo id
function updateContact(id, name, email, phone) {
    let flag = false;
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].id === id) {
            contact[i].name = name;
            contact[i].email = email;
            contact[i].phone = phone;
            console.log("Cập nhật thành công");
            flag = true;
            break;
        }
    }
    if (flag == false) {
        console.log("Không tìm thấy liên hệ nào");
    }
}
//hàm xóa liên hệ theo id
function deleteContact(id) {
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].id === id) {
            contact.splice(i, 1);
            console.log("Xóa thành công");
            break;
        }
    }
    console.log("Không tìm thấy liên hệ nào");
}
//hàm menu
    let running = true;
    while (running) {
    let choice = parseInt(prompt(
            "Chọn một tùy chọn:\n" +
            "1. Thêm liên hệ mới\n" +
            "2. Hiển thị tất cả liên hệ\n" +
            "3. Kiểm tra liên hệ theo số điện thoại\n" +
            "4. Cập nhật liên hệ theo ID\n" +
            "5. Xóa liên hệ theo ID\n" +
            "6. Thoát"
        ));
switch (choice){
    case 1 :
        let addID = parseInt(prompt("Nhập ID liên hệ (số):"));
        let addName = prompt("Nhập tên liên hệ:");
        let addEmail = prompt("Nhập Gmail liên hệ:");
        let addPhone = prompt("Nhập số điện thoại liên hệ:");
        addContact(addID, addName, addEmail, addPhone);
        break;
    case 2 :
        showContact();
        break;
    case 3 :
        let findPhone = prompt("Nhập số điện thoại cần tìm:");
        findContact(findPhone);
        break;
    case 4 :
        let updateID = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
        let updateName = prompt("Nhập tên liên hệ:");
        let updateEmail = prompt("Nhập Gmail liên hệ:");
        let updatePhone = prompt("Nhập số điện thoại liên hệ:");
        updateContact(updateID, updateName, updateEmail, updatePhone);
        break;
    case 5 :
        let deleteID = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
        deleteContact(deleteID);
        break;
    case 6 :
        running = false;
        break;
    default :
        console.log("Lựa chọn không hợp lệ");
        break;
    }
}
