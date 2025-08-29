// Sama seperti sebelumnya, jika sebelumnya menggunakan != maka 7 dan "7" akan dianggap sama
// maka jika menggunakan !== maka 7 dan "7" akan dianggap berbeda
// Contoh :
function nomorVersi(nomor) {
    if (nomor !== 11) {             // Jika nomor versi bukan 11 maka dibolehkan login
        return "Silahkan login";
    }
    return "Maaf versi ini sudah tidak bisa login"
}

console.log(nomorVersi(11));      // Output : Maaf versi ini sudah tidak bisa login
console.log(nomorVersi("11"));    // Output : Silahkan login
