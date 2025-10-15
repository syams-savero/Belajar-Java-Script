// Sama seperti ternanry sebelumnya, bedanya disini kita akan membuat versi multiple tternary
// ini sama saja seperi if else dengan banyak kondisi tapi dengan kode yang lebih singkat
// kekurangan nya adalah jika kondisi terlalu banyak maka akan cukup sulit unntuk dibaca
// jadi ternanry hanya digunakan unntuk kode kode yang ringkas saja

// Contoh jika menggunakan if else
function jenisAngka(angka) {
    if (angka > 0) {
        return "lebih dari 0";
    } else if (angka < 0) {
        return "kurang dari 0"
    } else {
        return "0"
    }
};

let hasil = jenisAngka(1)
console.log(hasil);

let hasil2 = jenisAngka(-1)
console.log(hasil2);

let hasil3 = jenisAngka(0);
console.log(hasil3);


// Sedangkan jika kita menggunakan Multiple Ternary maka akan menjadi :

function jenisNomor(nomor) {
    return nomor > 0 ? "Lebih dari 0"
    : nomor < 0 ? "Kurang dari 0" 
    : "Nol"
};

let hasil4 = jenisNomor(3);
console.log(hasil4);

let hasil5 = jenisNomor(-2);
console.log(hasil5);

let hasil6 = jenisNomor(0);
console.log(hasil6);

// Dari kedua kode di atas tadi, keduanya bekerja dengan cara yang sama. bedanya jika menggunakan ternary maka
// code akan terlihat lebih ringkas, namun agak sulit dibaca