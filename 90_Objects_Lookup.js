// Mengganti code di bawah ini menjadi menggunakan objects
//
/*
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
*/

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie")); // "Chicago"
console.log(phoneticLookup(""));        // undefined


// Latihan soal 
/* Buat sebuah fungsi bernama chainLookup yang menerima sebuah Chain ID (angka) sebagai input, lalu mengembalikan nama jaringan blockchain sesuai tabel berikut:

Chain ID	Network Name
1	Ethereum Mainnet
5	Goerli Testnet
137	Polygon Mainnet
80001	Polygon Mumbai Testnet
56	BNB Smart Chain
Aturan:
Gunakan object lookup untuk mapping (jangan if/else atau switch).
Jangan ubah return result;.
Jika input Chain ID tidak ada di object, kembalikan undefined. */

function chainLookup(ChainID) {       //Membuat fungsi untuk input
  let hasil = "";                     //Membuat variabel untuk hasil
  let alamatBlockchain = {            //Membuat variabel untuk Objects
    1: "Ethereum Mainnet",            //Properties 1 dengan value "Ethereum Mainnet"
    5: "Goerli Testnet",              //Properties 5 dengan value "Goerli Testnet"
    137: "Polygon Mainnet",           //Properties 137 dengan value "Polygon Mainnet"
    80001: "Polygon Mumbai Testnet",  //Properties 80001 dengan value "Polygon Mumbai Testnet"
    56: "BNB Smart Chain"             //Properties 56 degan value "BNB Smart Chain"
  };
  hasil = alamatBlockchain[ChainID];  //Mengisi variabel hasil dengan variabel untuk Objects dan menggunakan parameter function sebagai input properties dalam Objects
  return hasil || "Chain ID tidak dapat ditemukan\nSilahkan pilih :\n1 = Ethereum\n5 = Goerli Testnet\n137 = Polygon Mainnet\n80001 = Polygon Mumbai Testnet\n56 = Binance Smart Chain"; //Memberi hasil jika Chain ID tersedia, dan memberi hasil "Chain ID tidak dapat ditemukan" jika user mengisi Chain ID yang tidak tersedia di Obejcts
};

console.log(chainLookup(1));      // Ethereum Mainnet
console.log(chainLookup(100));    // Chain ID tidak ditemukan