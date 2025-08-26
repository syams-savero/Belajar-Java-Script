// Cek Properties dalam Objects
// Membuat sistem yang berfungsi untuk mengecek data data di dalam Objects, lebih tepatnya properties
// Contoh :

// Data Objects
let rumah = {
    kamarTidur: 2,
    kamarMandi: 2,
    taman: 1
}

// Membuat sistem check
function cekRumah(rumah, cek) {
    if (rumah.hasOwnProperty(cek)) {
        return rumah[cek];
    } else {
        return "Ruang tidak ditemukan";
    }
}

// Menjalankan sistem untuk cek data
console.log(cekRumah(rumah, "kamarTidur")); //Output nya angka 2 karena di dalam Variabel ada Properties kamarTidur dan isinya 2
console.log(cekRumah(rumah, "gudang"));     //Ruang tidak ditemukan karena tidak ada properties yang ditulis di variabel rumah