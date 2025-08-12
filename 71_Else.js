// Menggunakan fungsi else jika if memberi output false
// Contoh
function topUp(saldo) {
    if (saldo < 100) {
        return "Saldo anda tidak cukup";
    } else {
        return "Top up berhasil!";
    }
}

console.log(topUp(100));    //Contoh output True
console.log(topUp(99));     //Contoh output False