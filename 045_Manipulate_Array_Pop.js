// Mirip seperti sebelumnya bedanya disini kita menghapus nilai terakhir dalam array menggunakan pop
// ini adalah cara kerja fitur undo, keranjang di online shop, dan lain lain
// contoh :
const KERANJANG = ["Pisang", "Buah Naga", "Ayam"];
// lalu kita ingin menghapus ayam
let barangDihapus = KERANJANG.pop();
// Dengan begini maka isi dari variabel KERANJANG hanya tersisa Pisang dan Buah Naga
// Sedangkan pada variabel barangDihapus berisi Ayam
// gampang nya "Ayam" dari variabel KERANJANG berpindah ke variabel barangDihapus