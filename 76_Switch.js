// switch, fungsi nya sama seperti if else diberi ===
// fungsi swicth adalah untuk mempersingkat kode
// switch mirip function
// case mirip if
// Default mirip else
// selain 3 itu juga ada namanya break, fungsinya untuk memberhentikan case yang berjalan agar case
// dibawahnya tidak ter eksekusi
// Contoh :
// Membuat pilihan role 

function chooseRole(role) {    // Membuat fungsi dengan parameter role
    let choosedRole = "";      // Membuat variabel sebagai wadah hasil role yang dipilih

switch (role) {                // menggunakan swicth untuk membuat beberapa pilihan
case "Pendekar":               // Pilihan Pendekar
    choosedRole = "Sekarang anda adalah Pendekar"; 
    break;
case "Penyihir":               // Pilihan Penyihir
    choosedRole = "Sekarang anda adalah Penyihir";
    break;
case "Pemburu":                // Pilihan Pemburu
    choosedRole = "Sekarang anda adalah Pemburu";
    break;
default:                       // Pilihan jika tidak ada role yang tersedia
    choosedRole = "Role tidak ditemukan";
}
return choosedRole             // Mengirimkan hasil pilihan role ke variabel choosedRole
}

// Mencoba semua pilihan
let hasil1 = chooseRole("Pendekar");    // Sekarang anda adalah Pendekar
console.log(hasil1);

let hasil2 = chooseRole("Penyihir");    // Sekarang anda adalah Penyihir
console.log(hasil2);

let hasil3 = chooseRole("Pemburu");     // Sekarang anda adalah Pemburu
console.log(hasil3);

let hasil4 = chooseRole("Icikiwir");     // Role tidak ditemukan
console.log(hasil4);