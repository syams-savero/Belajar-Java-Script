// Menambahkan properties pada objects
// caranya cukup mirip dengan mengganti isi dari properties dalam objects
// Contoh 1 :
let rumah = {
    kamar: 5,
    taman: 2,
    kamarMandi: 2,
};

// Disini kita ingin menambahkan kamar anak sebanyak 2 
rumah.kamarAnak = 2;    // Kode ini akan menambahkan properties dalam objects rumah secara tidak langsung

// menggunakan properties kamarAnak
console.log(rumah.kamarAnak);   // Muncul output 2, artinya kita berhasil menambah properties baru


// Cara 2 :
let cafe = {
    kursi: 100,
    meja: 25,
    taman: 2
};

// kita ingin menambahkan ruang kerja sebanyak 1
cafe["ruangKerja"] = 1;

// menggunakan properties ruang kerja 
console.log(cafe.ruangKerja);   // Muncul output 1, kita berhasil menambah properties baru
