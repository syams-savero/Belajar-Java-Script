// jika sebelumnya menggunakan &&, disini kita akan menggunakan || yang artinya function akan true jika 
// salah satu syarat terpenuhi
// Contoh :
function cekRentang(angka) {
    if (angka < 10 || angka > 20) {     // Jika angka lebih kecil dari 10 atau lebih besar dari 20 maka true
        return "Tidak dipilih";
    }
    return "Angka pilihan";
}

console.log(cekRentang(15));    //false
console.log(cekRentang(21));    //true
console.log(cekRentang(8));     //true