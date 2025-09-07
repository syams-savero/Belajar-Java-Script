// Mirip seperti sebelumnya bedanya di for loop ini jika kita sudah tau pasti mau loop apa
// Cara kerja for loop:
// for (inisialisasi; kondisi; perubahan) {kode yang di loop}
// -inisialisasi = sebelum kode dijalankan / mulai dari mana
// -kondisi = syarat loop terus jalan
// -perubahan = apa yang dilakukan setelah 1 putaran loop selesai
// proses ini akan terus berulang hingga kondisi menjadi false


// Contoh :
// contoh disini kita ingin mengisi array kossong menjadi angka 1 - 10
const array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
    console.log("Menambahkan angka " + i + " ke array");
};

// Menampilkan hasil akhir array
console.log("Hasil akhir array sekarang = " + array);


// Latihan soal
// Buatlah Array genap 2 - 50 menggunakan for loop
let arrayGenap = [];
for (let i = 2; i <= 50; i += 2) {
    arrayGenap.push(i);
    console.log("Menambahkan angka : " + i + " ke Array Genap");
};
// menampilkan hasil akhir dari array genap
console.log("Hasil akhir " + arrayGenap);

// setelah itu jumlahkan semua isi dari array genap menggunakan for loop lagi
let hasilPenjumlahan = 0;
for (let i = 0; i < arrayGenap.length; i++) {
    hasilPenjumlahan += arrayGenap[i];
    console.log("Menambahkan angka " + arrayGenap[i]);
};
// Menampilkan hasil akhir
console.log("Semua angka di array sudah  dijumlahkan, totalnya adalah " + hasilPenjumlahan);