// Sama seperti sebelumnya bedanya disini kita akan membuat pilihan login 
// Soal : Buatlah pilihan login untuk 3 akun
function login(akun) {
    let PILIHANAKUN = "";

switch (akun) {
case "akun1":
    PILIHANAKUN = "Sekarang anda login di akun 1";
    break;
case "akun2":
    PILIHANAKUN = "Sekarang anda login di akun 2";
    break;
case "akun3":
    PILIHANAKUN = "Sekarang anda login di akun 3";
    break;
default:
    PILIHANAKUN = "Nama akun tidak ditemukan, Silahkan pilih akun yang tersedia :\nakun1\nakun2\nakun3"
}
return PILIHANAKUN;
}

hasil1 = login("akun1");
console.log(hasil1);

hasil2 = login("akun2");
console.log(hasil2);

hasil3 = login("akun3");
console.log(hasil3);

hasil4 = login("icikiwir");
console.log(hasil4);