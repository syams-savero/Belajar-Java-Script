// Cara menghapus Properties dalam Objects
// Contoh :

let ikanlele = {
    sirip: 2,
    ekor: "ada",
    taring: "ada",
    sengat: "ada",
    warna: "hitam"
};

// kita ingin menghapus properties bernama taring
delete ikanlele.taring;     // dengan begini maka properties bernama taring akan dihapus

// menjalankan objects ikanlele 
console.log(ikanlele);      // bisa dilihat dari output nya properties taring sudah terhapus