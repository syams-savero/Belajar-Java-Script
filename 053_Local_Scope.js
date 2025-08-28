// Local scope atau bisa juga disebut dengan Function Scope adalah sebuah variabel yang hanya bisa
// Digunakan di dalam suatu function
// jika dipanggil diluar function maka akan terjadi error
// Contoh :
function cek(harga) {			// Membuat function dengan parameter harga
	let makanan = 2 + harga;	// Membuat local scope dengan isi 2 + harga
	console.log(makanan);		// Memunculkan hasil dari variabel makanan
}
cek(5); 						// Menjalankan fungsi dari Function