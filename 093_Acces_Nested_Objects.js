// Cara mengakses nested objects, bisa juga disebut dengan mengakses objects di dalam objects
// Ini mirip seperti dengan Acces Nested Array, bedanya hanya disini kita menggunakan objects dan
// untuk memanggil value nya kita harus menggunakan properties, bukan angka seperti Array
// Contoh :

const rumah = {
    dalam: {
        kamarTidur: "kasur, selimut, lemari",
        kamarMandi: "Wastafel, Toilet, Shower"
    }, 
    luar: {
        taman: {
            tanaman: "Bibit tanaman",
            alatMenanam: "Sekop, Cangkul, Pupuk, dll"
        },
        garasi: {
            mobil: "Ferarri, porsche",
            motor: "ducati, zx10r"
        }
    }
};

// cara memanggil value
let cariBarang = "";

// Jika ingin tau mobil di garasi
cariBarang = rumah.luar.garasi.mobil;
console.log(cariBarang);

// Jika ingin tau motor di garasi
cariBarang = rumah.luar.garasi.motor;
console.log(cariBarang);
