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