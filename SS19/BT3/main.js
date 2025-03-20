let money1 = prompt("Nhập số tiền bạn muốn chuyển");
let unit = prompt("Nhập đơn vị bạn muốn chuyển ( VND hoặc USD)");
let tygia = 23000;

let money2
if(unit ==="USD"){
    money2 = money1 / tygia;
    alert(+money1+" VND bằng "+money2+" USD")
}
else if (unit ==="VND"){
    money2 = money1 * tygia;
    alert(+money1+" USD bằng "+money2+"VND")
}