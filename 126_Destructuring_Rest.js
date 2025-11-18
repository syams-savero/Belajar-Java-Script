// Cara destucture untuk rest elements
// mirip seperti destructure array
// contoh :

// kita ingin menghapus secara otomatis 2 digit di depan array
function removeArray(array) {
    const [a, b, ...sisaArray] = array
    return sisaArray;
};


// data array
const contohArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// hasil
let hasil = removeArray(contohArray);
console.log(hasil);