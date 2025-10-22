// Sama seperti sebelumnya, bedanya disini juga akan mempelajari bagaimana cara menggabungkan
// array
let array1 = [1, 2];
let array2 = [3, 4, 5];

const gabungArray = (a, b) => a.concat(b);

const hasil = gabungArray(array1, array2);
console.log(hasil);