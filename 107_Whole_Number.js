// mirip seperti sebelumnya sama sama generate random number tapi disini angkanya akan di bulatkan menggunakan Math.floor()
// Math.floor() berfungsi untuk membulatkan angka
// Contoh :

function nomorAcak() {
    return Math.floor(Math.random() * 10);  // dikali 10 agar desimal lebih dari 0
};

let a = nomorAcak();
console.log(a);

// note : kode di atas hanya bisa mengacak angka 0 - 9