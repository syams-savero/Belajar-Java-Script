// Sama seperti sebelumnya, jika sebelumnya menggunakan pop untuk menghapus dan menyimpnan isi yang dihapus
// Disini kita akan menggunakan shift untuk menghapus isi dari array yang paling depan dan menyimpan nilai 
// nya pada variabel baru
// Contoh :
const HARGA = [[100.000], [50.000]];
const HARGATERMAHAL = HARGA.shift();
// Jadi isi dari variabel HARGA adalah 50.000
// Sedangkan variabel HARGATERMAHAL sekarang berisi 100.000