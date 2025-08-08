// Membandingkan nilai menggunakan ==
// Contoh :
function layak(bersih) {
    if (bersih == 10) {         // Artinya jika nilai nya sama sama 10 maka akan layak dipakai
        return "Layak dipakai";
    }
    return "Tidak Layak Dipakai"
}

console.log(layak(10)); // Outputnya akan layak pakai
console.log(layak(9));  // Outputnya akan tidak layak pakai

//Funfact : 5 dan "5" juga akan dideteksi sama walau beda jenis data jika menggunakan ==
//Untuk mengatasinya akan dibahas di next level