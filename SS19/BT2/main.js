let characters = prompt("Nhập một kí tự");
characters = String(characters);

if(characters.length === 1 && ((characters >= 'A' && characters <= 'Z') || (characters >= 'a' && characters <= 'z'))){
    alert("Ký tự " +characters+" là chữ cái");
}
else{
    alert("Không phải chữ cái");
}