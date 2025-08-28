// Membuat function untuk menentukan hasil ujian siswa menggunakan function dan chain If Else
/* Soal : 
Nilai	Predikat
100	"Perfect!"
90 – 99	"Excellent"
75 – 89	"Good"
60 – 74	"Pass"
40 – 59	"Remedial"
< 40	"Fail"                                                                                             */

// Hasil kode :
let hasilAkhir = ["Perfect", "Excellent", "Good", "Pass", "Remedial", "Fail"]

function hasil(nilai) {
    if (nilai === 100) {
        return hasilAkhir[0];
    } else if (nilai >= 90 && nilai <= 99) {
        return hasilAkhir[1];
    } else if (nilai >= 75 && nilai <= 89) {
        return hasilAkhir[2];
    } else if (nilai >= 60 && nilai <= 74) {
        return hasilAkhir[3];
    } else if (nilai >= 40 && nilai <= 59) {
        return hasilAkhir[4];
    } else if (nilai < 40) {
        return hasilAkhir[5];
    } else {
        return "Salah input nilai";
    }
}

console.log(hasil(100));    //Perfect!
console.log(hasil(97));     //Excellent
console.log(hasil(85));     //Good
console.log(hasil(68));     //Pass
console.log(hasil(43));     //Remedial
console.log(hasil(39));     //Fail
console.log(hasil(101));    //Salah input nilai