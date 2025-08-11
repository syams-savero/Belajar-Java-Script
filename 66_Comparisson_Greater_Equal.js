// Sama seperti sebelumnya, bedanya disini kita menggunakan >= 
// 5 >= 5, jika angka 5 atau lebih dari 5 maka artinya true
// Contoh :
function topUp(saldo) {
    if (saldo >= 1000000) {         // Jika saldo 1000000 atau lebih maka free biaya admin
        return "Free Biaya Admin";
    }
    if (saldo >= 100000) {          // Jika saldo 100000 atau lebih maka kena biaya admin
        return "Kena Biaya Admin";
    }
    return "Saldo Anda Tidak Mencukupi";    // jika tidak keduanya maka saldo tidak cukup
}

console.log(topUp(1000000));
console.log(topUp(100000));
console.log(topUp(50000))