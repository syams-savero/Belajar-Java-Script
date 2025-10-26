// disini kita akan belajar untuk membuat default parameter untuk function
// jadi walau ada 2 parameter kita bisa memberi input untuk 1 parameter saja karena parameter 1 lagi sudah ada nilai default
// contoh mudah :

function penjumlahan(a, b = 1) {
    return a + b;
};

console.log(penjumlahan(1, 2));     // hasilnya akan 3 karena 1 + 2
console.log(penjumlahan(3));        // hasilnya akan 4 karena 3 + 1

// atau bisa juga
const penjumlahan2 = (a, b = 3) => a + b;

console.log(penjumlahan2(1, 5));    // hasilnya akan 6 karena 1 + 5
console.log(penjumlahan2(2));       // hasilnya akan 5 karena 2 + 3


// Jika mau lebih expert bisa juga seperti ini :
const pengurangan = (a = 0, b = 0) => a - b;
// Kedua parameter memiliki nilai base yaitu 0
console.log(pengurangan());  // dia akan memberikan hasil 0 sebagai efault value
console.log(pengurangan(1)); // 1 - 0 = 0