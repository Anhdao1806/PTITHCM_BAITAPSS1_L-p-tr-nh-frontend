let input1 = Number(prompt("Mời bạn nhập vào số a"));
let input2 = Number(prompt("Mời bạn nhập vào số b"));
let input3 = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");

let output;
if ( input3 === "+"){
    output = input1 + input2;
    alert(output);
}
else if( input3 === "-"){
    output = input1 - input2;
    alert(output);
}
else if(input3 === "*"){
    output = input1 * input2;
    alert(output);
}
else if(input3 ==="/"){
    output = input1 / input2;
    alert(output);
}
