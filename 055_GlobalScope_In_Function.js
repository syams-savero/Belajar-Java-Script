// Mempelajari bagaimana cara menggunakan Global Scope di dalam function
// Contoh :
let ahay = 123;				// Variabel Global Scope yang akan di ubah	

// Tujuan : menjumlahkan variabel ahay dengan function menjadi 130
function jumlah() {			// Membuat function dengan nama jumlah 
	ahay += 7;				// menjumlahkan variabel ahay dan angka 7 agar menjadi 130
	return ahay;			// Mengkonfirmasi penjumlahan pada function jumlah
}
console.log(jumlah());		// Menunjukan output ketika di run yang akan mengeluarkan angka 130