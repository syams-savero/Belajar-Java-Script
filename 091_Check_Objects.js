// Cek Properties dalam Objects
// Membuat sistem yang berfungsi untuk mengecek data data di dalam Objects, lebih tepatnya properties
// dan fungsi ini bisa dipakai untuk banyak object, tidak hanya terpaku dalam 1 object
// Contoh :

// Data Objects
let rumah = {
    kamarTidur: 2,
    kamarMandi: 2,
    taman: 1
}

// Membuat sistem check
function cekObject(object, cek) {
    if (object.hasOwnProperty(cek)) {       //kalau object punya properti dengan nama parameter cek (langsung dari objek itu sendiri, bukan dari prototype-nya), maka kondisi if bernilai true.
        return object[cek];                 //Hasil true akan menjalankan isi dari properties object yang function nya diberi input 
    } else {
        return "tidak ditemukan";
    }
}

// Menjalankan sistem untuk cek data
console.log(cekObject(rumah, "kamarTidur")); //Output nya angka 2 karena di dalam Variabel ada Properties kamarTidur dan isinya 2
console.log(cekObject(rumah, "gudang"));     //tidak ditemukan karena tidak ada properties yang ditulis di variabel rumah

// Contoh lain menggunakan object yang berbeda dan function yang sama seperti sebelumnya
let tx1 = {
  hash: "0xabc123...",
  from: "0x1111...",
  to: "0x2222...",
  value: 2.5,
  gasUsed: 21000
};

// Menjalankan function untuk cek object
console.log(cekObject(tx1, "hash"));        // 0xabc123...
console.log(cekObject(tx1, "gasUsed"));     // 21000
console.log(cekObject(tx1, "price"));       // tidak ditemukan
