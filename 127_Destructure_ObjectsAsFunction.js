// Cara Destructure Objets menggunakan function
// kita ingin meggunakan beberapa data di dalam objects
// Contoh :


// Data Ojects
const hargaBTC = {
    januari: {tertinggi: 100000, terendah: 80000},
    februari: {tertinggi: 95000, terendah: 70000},
    maret: {tertinggi: 112000, terendah: 95000}
};

// kita ingin megamil harga rata rata pada bulan februaari
// proses destructure
let ambilNilai = ({februari: {tertinggi, terendah}}) => (tertinggi + terendah) / 2

console.log(ambilNilai(hargaBTC))