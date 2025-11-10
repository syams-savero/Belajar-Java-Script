// mirip sseperti sebelumnya, bedanya disini kita akan mengakses untuk nested variabel menggunakan destrucutre
// contoh :

// nested objects 
const historiHarga = {
    shampo: {tertinggi: 10000, terendah: 7000},
    sabun: {tertinggi: 5000, terendah: 3000},
    pastaGigi: {tertinggi: 12000, terendah: 9000}
};

// buatlah destructure harga tertinggi shampo dan harga terendah sabun
let {shampo: {tertinggi: shampoTertinggi}, sabun: {terendah: sabunTerendah}} = historiHarga

// Cek variabel baru
console.log(sabunTerendah);
console.log(shampoTertinggi);
