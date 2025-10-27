// Sama seperti sebelumnya, bedanya disini juga akan mempelajari bagaimana cara menggabungkan
// array
let array1 = [1, 2];
let array2 = [3, 4, 5];
let array3 = [6, 7, 8];

const gabungArray = (a, b) => a.concat(b);

const hasil = gabungArray(array1, array2);
console.log(hasil);

// atau bisa juga
function gabungArray2(a, b) {
    return a.concat(b);
}

console.log(gabungArray(array1, array2));

// Versi advance
function gabungArray3(a, b, c) {
    let hasil = [];
    let proses = [];
    proses = a.concat(b);
    hasil = proses.concat(c);
    return hasil
};

console.log(gabungArray3(array1, array2, array3))