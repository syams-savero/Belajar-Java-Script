// Function: Fungsinya adalah untuk membuat sistem/kode yang bisa digunakan berulang kali

// Tanpa function (kode berulang):
let nama1 = "Budi";
let nama2 = "Icikiwir";

console.log("Halo " + nama1);
console.log("Halo " + nama2);



// Dengan function (kode lebih efisien dan rapi):
function namaFunction(nama) {
  console.log("Halo " + nama);
}

// Memanggil function:
namaFunction("Budi");
namaFunction("Icikiwir");

// Kedua cara di atas output yang dikeluarkan memang sama, tapi dengan function jika data kita banyak maka
// akan membuat penulisan kode menjadi lebih efisien karena kita udah bikin sistem logikanya
