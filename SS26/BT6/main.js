let array =["2025-03-10", "2024-12-25", "2023-07-01"];

function daodate(array) {
    if (Array.isArray(array) == false) {
        return ('dữ liệu không hợp lệ')
    };

    if (array.length === 0) {
        return ('mảng rỗng');
    }
let daonguocdate = array.map( arr => arr.split("-").reverse().join("/"));
 return daonguocdate;
}
console.log(daodate(array))