// Urutan eksekusi dalam if else, di dalam if else eksekusi akan selalu didahulukan dari atas
// Contoh :
function nomor(angka) {
    if (angka < 1) {
        return "Lebih kecil dari 1";
    } else if (angka < 2) {
        return "Lebih kecil dari 2";
    } else {
        return "Lebih besar dari 2";
    }
}

console.log(nomor(0));  //Lebih kecil dari 1
console.log(nomor(1));  //Lebih kecil dari 2
console.log(nomor(3));  //Lebih besar dari 2

// Bandingkan dengan

function total(orang) {
    if (orang < 2) {
        return "Orang kurang dari 2";
    } else if (orang < 1) {
        return "Orang kurang dari 1";
    } else {
        return "Banyak orang";
    }
}

console.log(total(0));  // Menunjukan hasil orang kurang dari 2 padahal seharusnya kita ingin hasilnya kurang dari 1
console.log(total(3));  // Banyak orang

// Inilah pentingnya urutan dalam menggunakan If dan Else karena beda urutan beda hasil
