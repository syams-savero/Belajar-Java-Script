// Membandingkan menggunakan === agar angka dan variabel dibedakan
// jika sebeulumnya 7 dan "7" dianggap sama, maka sekarang dengan menggunakan === kedua nya akan berbeda
// Contoh :
function login(password) {
    if (password === 10) {
        return "Selamat Anda Berhasil Login"
    }
    return "Maaf Password Anda Salah"
}

console.log(login(10));     // Password benar
console.log(login(7));      // Password salah
console.log(login("10"));   // Password salah
