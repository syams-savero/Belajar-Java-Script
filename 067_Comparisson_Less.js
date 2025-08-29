// Masih mirip dengan sebelumnya, disini kita menggunakan < yang artinya kurang dari
// Misal, 2 < 3. artinya jika kurang 3 maka true
// Contoh :
function batasUsia(umur) {
    if (umur < 18) {            // Jika umur dibawah 18 maka termasuk dibawah umur
        return "Maaf anda masih dibawah umur";
    }
    return "Anda sesuai umur";
}

console.log(batasUsia(18));     // Sesuai umur
console.log(batasUsia(16));     // Dibawah umur
