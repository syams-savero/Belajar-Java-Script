// Sama seperti sebelumnya bedanya disini menggunaan 2 nilai yang berbeda
// Contoh :
function login(password, verifikasipassword) {
    if (password === verifikasipassword) {
        return "Selamat datang!";
    }
    return "Password tidak cocok";
}

console.log(login(123, "123")); // contoh gagal login
console.log(login(123, 123));   // contoh login berhasil