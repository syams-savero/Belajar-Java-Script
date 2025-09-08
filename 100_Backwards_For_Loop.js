// Mirip seperti sebelumnya, disini kita akan menggunakan for loop untuk menambahkan angka ke array
// dari yang besar menuju ke terkecil
// Sebagai contoh disini kita akan menambahkan angka ganjil ke array dari 99 ke 1
let arrayGanjil = [];
for (let i = 99; i > 0; i -= 2) {
    arrayGanjil.push(i);
    console.log("Menambahka angka " + i + " ke array");
};

// Menampilkan hasil akhir
console.log("Hasil akhir " + arrayGanjil);