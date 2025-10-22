// Membuat function dengan cara lain
// jika biasanya menggunakan
function nomor() {
    return 1;
};

console.log(nomor());

// kita bisa ubah menjadi
const nomor1 = () => 2;     // sebelum => adalah parameter, sesudah => adalah output
console.log(nomor1());

// Fungsinya agar kode dapat menjadi lebih ringkas