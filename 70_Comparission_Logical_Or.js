// Cara kerja nya mirip seperti sebelumnya yang menggunakan && disini kita akan menggunakan || untuk cek
// rentang, misal membuat rentang nomer dari 10 - 20
// Contoh :
function cekRentang(angka) {
    if (angka < 10 || angka > 20) {     // Jika angka lebih kecil dari 10 dan lebih besar dari 20
        return "Tidak dipilih";
    }
    return "Angka pilihan";
}

console.log(cekRentang(15));
console.log(cekRentang(21));

// Bedanya jika menggunakan || ini untuk mngecek nilai diluar rentang harga
// Kalau menggunakan && ini untuk mengecek nilai di dalam rentang harga