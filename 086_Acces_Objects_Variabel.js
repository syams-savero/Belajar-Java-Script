// Mengakses Objects menggunakan variabel
// Berfungsi untuk value object yang lebih dinamis dan bisa dipilih user dari variabel
// Contoh

// Data akun :
let wallet = {
    akun1: "BTC, ETH",
    akun2: "SOL, BNB"
};

let pilihAkun = "akun2";                    // variabel untuk user memilih
let akunYangdipilih = wallet[pilihAkun];    // sistem yang membuka isi akun dari wallet yang dipilih user
console.log(akunYangdipilih);               // Menampilkan isi dari wallet yang dipilih
