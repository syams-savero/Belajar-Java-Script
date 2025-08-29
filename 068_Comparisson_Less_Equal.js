// Mirip seperti < bedanya disini kita akan menggunakan <=
// Artinya, 5 <= 5, jika 5 sama dengan 5 atau kurang dari 5 akan hasilnya true
// Contoh :
function minimalUsia(umur) {
    if (umur <= 15) {               // Jika berumur 15 atau kurang dari 15 maka tidak boleh ikut
        return "Tidak boleh ikut";
    }
    return "Boleh ikut";
}

console.log(minimalUsia(18));   // Diperbolehkan ikut karena berumur 18
console.log(minimalUsia(15));   // Tidak Diperbolehkan ikut karena berumur 15
