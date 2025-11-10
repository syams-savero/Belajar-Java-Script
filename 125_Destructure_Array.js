// cara cepat mengambil data dari array menggunakan destructure array
// contoh

// array
let angkaAcak = [4, 5, 2, 8, 3, 6];

// kamu ingin ambil angka 4, 2, 8
let [a,,b,c] = angkaAcak
// maka otomatis variael a, b, c terbuat
// untuk skip urutan data cukup tambahkan ,

// cek hasil
console.log(a)
console.log(b)
console.log(c)