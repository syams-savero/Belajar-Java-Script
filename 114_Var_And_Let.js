// Menjelaskan tentang perbedaan konsep var dan let lebih detail
// Contoh jika menggunakan var

function dibawah10(a) {
    var hasil = "angka diatas 10"   // Variabel menjadi (bisa digunakan berkali kali sepanjang function yang dapat menyebabkan error)
    if (a < 10) {
        hasil = "angka dibawah 10";
        return hasil;
    } else {
        return hasil;
    }
}

console.log(dibawah10(5));
console.log(dibawah10(22));

// Untuk mengatasi hal ini kita bisa menggunakan let disetiap fungsi dalam function agar meminimalisir terjadinya error
// contoh menggunakan let

function dibawah20(angka) {
    let jawaban = "angka dibawah 20"
    if (angka > 20) {
        let jawaban = "angka di atas 20";
        return jawaban;
    } else {
        return jawaban;
    };
};

console.log(dibawah20(23));
console.log(dibawah20(13));

// walau sama sama ga error tapi menggunakan let pada setiap fungsi akan lebih aman karena walau nama variabel nya sama
// tapi di fungsi yang berbeda maka akan dianggap variabel yang berbeda juga