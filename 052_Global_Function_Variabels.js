// Contoh variabel Global Scope dan Function Scope

// Contoh variabel Global Scope :
var global1 = "Icikiwir";
let global2 = "Aselole";
const GLOBAL3 = "Ihir";
// Semua variabel di atas adalah variabel global
// Digunakan kalau kamu butuh nilai yang bisa dipakai di mana saja, di dalam atau di luar fungsi.
// Cocok buat data umum yang dibutuhkan oleh banyak bagian dari program.
// Dideklarasikan di luar fungsi mana pun.
// Bisa dipanggil dan digunakan dari fungsi mana pun.



// Contoh variabel Funtion Scope :
function fungsi() {
	let hehe = "HIHIHIHA";
}

// Contoh variabel function scope yang salah :
function fungsi2() {
	haha = "AHIHIHI"
}
// Salah karena tidak menggunakan let atau const, sehingga variabel ini menjadi global

// Digunakan kalau kamu hanya ingin variabel dipakai di dalam satu fungsi saja.
// Membantu menjaga kode tetap rapih dan tidak bentrok dengan variabel lain.
