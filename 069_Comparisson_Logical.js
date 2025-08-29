// Cara menggunakan 2 pembanding dalam 1 function 
// berfungsi jika kita ingin membuat sistem misal angka yang ingin dipilih di atas 10 dan dibawah 20
// Contoh ribet :
function nomorAbsen(absen) {
    if (absen > 10) {
        if (absen < 20) {
            return "Siswa terpilih";
        }
    }
    return "Siswa biasa";
}
// Memilih absen siswa di atas 10 dan dibawah 20
console.log(nomorAbsen(16));
console.log(nomorAbsen(9));

// Cara simpel
function nomorUndian(kode) {
    if (kode > 10 && kode < 20) {
        return "Kode terpilih";
    }
    return "Kode buangan";
}
// Memilih kode di atas 10 dan dibawah 20
console.log(nomorUndian(15));
console.log(nomorUndian(8));
