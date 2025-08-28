// Membandingkan ketidaksamaan menggunakan != (Mirip seperti sebelumnya)
// Bedanya ini lebih seperti larangan misal, Saldo tidak boleh 0 
// Contoh :
function saldo(dana) {
    if (dana != 0) {      //Ini sama seperti kalau saldo tidak 0 maka berhasil, kalau saldo 0 maka gagal
        return "Jumlah Dana " + dana;
    }
    return "Tolong masukan dana";
}

console.log(saldo(100)); //Contoh yang berhasil karena dana yan dimasukan tidak 0
console.log(saldo(0));   //Contoh yang gagal karena dana yang dimasukan 0

// Intinya untuk menambahkan suatu larangan pada sistem