// fungsi template literal adalah untuk membuat string yang lebih singkat 
// contoh :

// Data
let nama = "Budi";
let umur = "20 Tahun";

// caara lama (ES5)
console.log("halo " + nama + "\numurku " + umur);

// cara baru (ES6)
console.log(`Halo namaku ${nama}
umurku ${umur}`);

// jauh lebih ringkas karena tidak perlu + dan \n


// Latihan soal
// membuat function untuk summary transaksi blockchain

// Data 1
const tx1 = {
  from: "0x123d9a8f9s0",
  to: "0x4560afiaf8ds9",
  value: 1.2,
  token: "ETH"
};

// Data 2
const tx2 = {
    from: "d7sa8d68as5d",
    to: "a8fs7a8f8sa78g86f7",
    value: 1,
    token: "BTC"
};

// Data 3
const tx3 = {
  from: "87er6t8er6tew0"
};

// Output yang diharapkan
/* Transaction Summary
   from :
   to :
   value :
   token :                      */
   

const summary = ({from = from, to = "invalid", value = 0, token = "none"}) => `Transaction Summary
from : ${from}
to : ${to}
value : ${value}
token : ${token}`;

// Cek Hasil
console.log(summary(tx1));
console.log(summary(tx2));
console.log(summary(tx3));