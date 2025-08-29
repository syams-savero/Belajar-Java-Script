// Cara menambahkan nilai pada Array, Cara kerja nya mirip dengan push. bedanya kalau push nambah nya 
// di belakang. kalau unshift di depan
// Contoh :
const PROFIL = [["BUDI", 40], ["IPIN", 15]];
const ORANG = PROFIL.shift();
PROFIL.unshift(["UPIN", 15]);
// sekarang isi dari variabel PROFIL adalah [ ["UPIN", 15], ["IPIN", 15] ]
// Sedangkan [BUDI, 40] pindah ke variabel ORANG
