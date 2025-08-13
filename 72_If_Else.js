// Kita bisa menggabungkan banyak if dan else dan function jika dibutuhkan banyak kemungkinan
// untuk hal ini kita akan menggunakan IF dan ELSE beberapa kali dan saling menyambung (chain)
// Contoh :
function beratIdeal(berat) {
    if (berat > 40) {
        return "Terlalu Berat";
    } else if (berat < 30) {
        return "Terlalu ringan";
    } else {
        return "Berat Ideal";
    }
}

console.log(beratIdeal(40));    //Ideal
console.log(beratIdeal(41));    //Terlalu berat
console.log(beratIdeal(29));    //Terlalu ringan
console.log(beratIdeal(35));    //Ideal