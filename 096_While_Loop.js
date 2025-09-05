// While loop, while loop adalah perintah yang akan terus menerus megeksekusi kode secara berulang hingga 
// syarat tertetu, jadinya loop ini hanya sementara makanya diberi nama while
// Contoh :
let array = [];
let i = 5;
// kita ingin mengisi array dengan angka 5 4 3 2 1 0
while (i >= 0) {        // ketika i lebih besar atau sama dengan 0
    array.push(i);      // maka akan menambahkan nilai i ke dalam array
    i--;                // setiap nilai i yang ditambahkan maka akan mengurangi 1 per 1 nilai nya
};

// Lihat hasil
console.log(array); //Array sudah terisi dengan angka yang diminta
console.log(i);     //karena value 5 dikurangi sebanyak 6 kali maka hasil akhirnya adalah -1