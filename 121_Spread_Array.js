// Mengcopy array menggunakan spread ...
// Contoh :

const arrayAseli = [1, 2, 3, 4, 5];

// kita ingin menambahkan isi dari array itu tapi tidak ingin array nya berubah
let copyArray = (arr) => [...arr];

// menggunakan function copyArray
console.log(copyArray(arrayAseli));