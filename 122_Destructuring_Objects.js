// Destructure Properties dalam objects
// contoh objects :
const dataDiri = {
    nama: "Prabowo",
    asal: "Jakarta",
    profesi: "Presiden",
    moto: "Hidup Jokowi",
    rekan: "Gibran"
};

// Jika di ES5 atau basic kita mengakses properties dalam objects dengan cara :
let ambilProperties = dataDiri.nama
console.log(ambilProperties);

// Pada ES6 kita cukup menggunakan :
let {nama, profesi, rekan} = dataDiri;
console.log(nama, profesi, rekan);
