// Global vs Local Scope
// Contoh :
const SAPI = 60;			// Contoh variabel global Scope

function hewan(jumlah) {	// membuat fungsi pada function
	return jumlah * 5;  	// Membuat fungsi jumlah dikali 5 (Local Scope)
}
console.log(hewan(10));		// Memanggil function dan menghasilakn output 50 (Local Scope)
console.log(SAPI);			// Memanggil Global Scope dan menghasilkan output 60 (Global Scope)
