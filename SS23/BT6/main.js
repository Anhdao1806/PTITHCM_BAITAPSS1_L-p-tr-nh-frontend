let arr = ["", false, 0, 5, 10, "Hello world!"  ];
let arr1 = [];
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] != false ){
        arr1.push(arr[i]);
    }
}
console.log(arr1);
