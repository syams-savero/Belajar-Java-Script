// Cara membuat function di dalam objects dengan cara lebih singkat
// Contoh cara lama 
let dataDiri = {
    nama: "Abdul",
    umur: 0,
    updateUmur: function(umurBaru) {
        this.umur = umurBaru;
        return this.umur;
    }
}

dataDiri.updateUmur(3);
console.log(dataDiri.umur)

// Contoh cara baru
let jenisMobil = {
    merek: "Porsche",
    tipe: "GTS",
    ubahTipe(tipeBaru) {
        jenisMobil.tipe = tipeBaru
        return this.tipe
    }
}

jenisMobil.ubahTipe("GT4 RS")
let {merek, tipe} = jenisMobil
console.log(merek, tipe)
