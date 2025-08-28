// If adalah sistem yang menggunakan kondisi lalu akan memberi 2 pilihan pada 2 kondisi tersebut
// yaitu true dan false
// Contoh :
function Saldo(Ada) {
    if (Ada) {
        return "Saldo anda mencukupi";
    }
    return "Maaf Saldo anda tidak cukup"
}

console.log(Saldo(true));
console.log(Saldo(false));