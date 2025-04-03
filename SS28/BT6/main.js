const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
function calculateTotal(cart) {
    return cart.reduce((total, element) => total + (element.price * element.quantity), 0);

}
const sum = calculateTotal(cart);
console.log("Tổng tiền trong giỏ hàng là: " + sum + " đồng");

