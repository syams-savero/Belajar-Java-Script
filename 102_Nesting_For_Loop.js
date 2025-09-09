// Mirip seperti sebelumnya, disini kita akan mengakses nested array atau array di dalam array
// agar sedikit menantang kita akan menggunakan 3 Dimensi array lalu menambahkan semuanya
// tapi sebelum itu kita akan menggunakan contoh sederhana terlebih dahulu
// Contoh :
let array2D = [[1, 2], [3, 4], [5, 6, 7]];
let hasilPerkalian = 1;
for (let i = 0; i < array2D.length; i++) {
    console.log("Array yang di akses saat ini " + array2D[i]);
    for (let j = 0; j < array2D[1].length; j++) {
        console.log("Sub Array yang di akses saat ini " + array2D[i][j]);
        hasilPerkalian *= array2D[i][j];
    };
};

// Menampilkan hasil akhir
console.log(hasilPerkalian);



// Latihan soal yang lebih sulit
// Disini kta akan menggunakan Array 3d dan function
let dataArray = [
  [[1,2],[3,4]],
  [[5,6],[7,8]]
];

function penjumlahArray(arr) {
    let hasilPenjumlahan = 0;
    for (let a = 0; a < dataArray.length; a++) {
        console.log("Array yang di akses saat ini " + dataArray[a]);
        for (let b = 0; b < dataArray[a].length; b++) {
            console.log("Sub Array 1 yang di akses saat ini " + dataArray[a][b]);
            for (let c = 0; c < dataArray[a][b].length; c++) {
                console.log("Sub Array 2 yang akan dijumlahkan " + dataArray[a][b][c]);
                hasilPenjumlahan += dataArray[a][b][c];
            }
        }
    }
    return hasilPenjumlahan;
};

// Menampilkan hasil akhir
let menjumlahkanArray = penjumlahArray(dataArray);
console.log(menjumlahkanArray);