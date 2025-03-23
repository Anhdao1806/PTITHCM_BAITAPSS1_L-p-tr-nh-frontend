let strg = prompt('nhập một một chuỗi bất kì:');
let search = prompt('nhập ký tự mà bạn muốn kiểm tra ');

let redflag = 0 ;
    for (let i = 0; i < strg.length; i++) {
       if ( search === strg[i]) {
        redflag = 1 ;
        break;
       }   
    }
    if (redflag === 1  ) {
        document.writeln('tồn tại từ mà bạn cần tìm kiếm')
    } else {
        document.writeln('không tồn tại từ mà bạn cần tìm kiếm')
    }