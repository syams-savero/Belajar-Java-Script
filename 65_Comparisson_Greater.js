// Membandingkan nilai sesuai besaran menggunakan > 
// cara kerja nya contoh : jika 5 > 3 maka akan muncul output "angka ini lebih besar dari 3"
// Contoh :
function transaksi(dana) {
    if (dana > 1000000) {
       return "Maaf Dana anda melebihi batas maksimal transaksi";
    }
    if (dana > 100000) {
       return "Bebas biaya Admin";
    }
    return "Anda terkena biaya Admin 2000";
}

console.log(transaksi(1200000));    //Kena batas maks
console.log(transaksi(120000));     //Bebas Admin
console.log(transaksi(50000));      //Kena biaya Admin