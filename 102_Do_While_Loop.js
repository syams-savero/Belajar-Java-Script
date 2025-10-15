// Do While Loop fungsinya mirip dengan While Loop, 
// tapi perbedaannya: kode di dalam 'do' dijalankan dulu minimal satu kali, 
// baru setelah itu kondisi di 'while' dicek.

let arrayKosong = [];
let angka = 10;

do {
  arrayKosong.push(angka); // masukkan angka ke array
  angka++;                 // naikkan nilai angka
} while (angka < 10);

console.log(arrayKosong); // Output: [10]

// Penjelasan:
// Pertama, kode di dalam 'do' langsung dijalankan — jadi angka 10 dimasukkan ke array.
// Setelah itu, angka bertambah jadi 11.
// Baru kondisi 'angka < 10' dicek, dan hasilnya false.
// Maka loop berhenti, dan hasil akhirnya adalah [10].