// Membuat function dengan parameter tidak terbatas
// Contoh simpel :
function inputData(...data) {
    let hasil = 0;
    for (let i = 0; i < data.length; i++) {
        hasil += data[i];
    }
    return hasil;
};

console.log(inputData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Contoh untuk menambahkan banyak data
let addData = (...data) => data;

console.log(addData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));