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


// Ini juga bisa digunakan bersamaan dengan array
// Contoh latihan soal :

/* Buat sebuah object bernama block yang menyimpan:
number (nomor block)
hash (string)
miner (object) dengan properti address dan reward
transactions (array) berisi minimal 2 transaksi.
Setiap transaksi berupa object { from, to, value } */

let block = {
    number: 1,
    hash: "SHA-256",
    miner: {
        adress: "763821673",
        reward: "1 BTC"
    },
    transcations: [
        {
            from: "user 1",
            to: "user 2",
            value: "0.5 BTC"
        },
        {
            from: "user 2",
            to: "user 3",
            value: "0.25 BTC"
        }
    ]
};

// Cara akses nya
let munculkanValue = "";

// Jika kita ingin akses value dari reward
munculkanValue = block.miner.reward;
console.log(munculkanValue);

// Jika kita ingin akses value dari transaksi pertama
munculkanValue = block.transcations[0].value;
console.log(munculkanValue);

// Jika kita ingin akses value dari siapa pengirim transaksi kedua
munculkanValue = block.transcations[1].from;
console.log(munculkanValue);