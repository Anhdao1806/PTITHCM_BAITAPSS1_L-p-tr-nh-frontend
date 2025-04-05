let product = [];
//hàm thêm sản phẩm
function addProduct(id,name,price,category,quantity){
    let productItem = {
        id: id,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    }
    product.push(productItem);
}
//hàm hiển thị sản phẩm
function showProduct(){
    if (product.length == 0) {
        console.log("Không có sản phẩm nào");
        return;
    }else{ console.table(product);}
}
//hàm tìm kiếm sản phẩm theo id
function findProduct(id){
    let flag = false;
    for ( let i = 0 ; i < product.length ; i++){
        if (product[i].id === id){
            console.log(product[i]);
            flag = true;
            break;
        }
    }
    if (flag == false){
        console.log("Không tìm thấy sản phẩm nào");
    }
}
//hàm cập nhật thông tin theo id
function updateProduct(id, name, price, category, quantity) {
    let flag = false;
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === id) {
            product[i].name = name;
            product[i].price = price;
            product[i].category = category;
            product[i].quantity = quantity;
            console.log("Cập nhật thành công");
            flag = true;
            break;
        }
    }
    if (flag == false) {
        console.log("Không tìm thấy sản phẩm nào");
    }
}
//hàm xóa sản phẩm theo id
function deleteProduct(id) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === id) {
            product.splice(i, 1);
            console.log("Xóa thành công");
            break;
        }
    }
    console.log("Không tìm thấy sản phẩm nào");
}
//hàm lọc sản phẩm theo giá 
function filterProductByPrice(minPrice, maxPrice) {
    let filterProduct = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (filterProduct.length == 0) {
        console.log("Không có sản phẩm nào");
        return;
    } else {
        console.table(filterProduct);
    }
}
//hàm menu
let running = true;
while (running) {
let choice = parseInt(prompt(
        "Chọn một tùy chọn:\n" +
        "1. Thêm sản phẩm mới\n" +
        "2. Hiển thị tất cả sản phẩm\n" +
        "3. Hiển thị chi tiết sản phâmt theo id \n" +
        "4. Cập nhật thông tin sản phẩm ID\n" +
        "5. Xóa sản phẩm theo ID\n" +
        "6. Lọc sản phẩm theo khoảng giá\n" +
        "7. Thoát"
    ));
switch (choice){
case 1 :
    let addID = parseInt(prompt("Nhập ID sản phẩm (số):"));
    let addName = prompt("Nhập tên sản phẩm:");
    let addPrice = prompt("Nhập giá:");
    let addCategory = prompt("Nhập danh mục sản phẩm:");
    let addQuantity = parseInt(prompt("Nhập số lượng sản phẩm:"));
    addProduct(addID, addName, addPrice, addCategory, addQuantity);
    break;
case 2 :
    showProduct();
    break;
case 3 :
    let findProductID = prompt("Nhập ID cần tìm:");
    findProduct(findProductID);
    break;
case 4 :
    let updateName = parseInt(prompt("Nhập ID sản phẩm:"));
    let updatePrice = prompt("Nhập giá:");
    let updateCategory = prompt("Nhập danh mục:");
    let updateQuantity = prompt("Nhập số lượng:");
    updateProduct(updateName, updatePrice, updateCategory, updateQuantity);
    break;
case 5 :
    let deleteID = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    deleteProduct(deleteID);
    break;
case 6 :
    let minPrice = parseInt(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseInt(prompt("Nhập giá cao nhất:"));
    filterProductByPrice(minPrice, maxPrice);
    break;
case 7 :
    running = false;
    break;
default :
    console.log("Lựa chọn không hợp lệ");
    break;
}
}