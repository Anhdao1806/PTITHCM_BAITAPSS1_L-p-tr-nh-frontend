console.log("Các số Armstrong có 3 chữ số là");

for( let i = 100 ; i < 1000 ; i++){
    let numberHundreds = Math.floor( i / 100);
    let numberTens = Math.floor((i % 100 )/10);
    let unitNumber = Math.floor(i % 10);

    let numberArmstrong = numberHundreds ** 3 + numberTens ** 3 + unitNumber **3;

    if(numberArmstrong === i){
        console.log(i);
    }
}