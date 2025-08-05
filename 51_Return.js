// Fungsi `return` digunakan untuk mengembalikan nilai dari sebuah function.
// Jika di materi sebelumnya kita menggunakan `console.log()` untuk mengecek apakah function berjalan,
// maka di sini kita menggunakan `return` agar hasil dari function bisa disimpan dan digunakan kembali.

// Contoh:
function pengurangan(angka) {
  // Function ini mengurangi nilai parameter `angka` dengan 5
  return angka - 5;
}

// Kita simpan hasil function ke dalam variabel
let angkaGanjil = pengurangan(7); // 7 - 5 = 2
let angkaGenap = pengurangan(8);  // 8 - 5 = 3

// Tampilkan hasilnya ke console
console.log(angkaGanjil); // Output: 2
console.log(angkaGenap);  // Output: 3