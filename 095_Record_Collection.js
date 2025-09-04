/* Record Collection

Goal : 
1. After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
2. After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
3. After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
4. After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
5. After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
6. After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be/////// set
7. After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide */

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!tracks[id])
  }
}


console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// sekarang recordCollection[5439].artist = "ABBA"

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// sekarang recordCollection[5439].tracks = ["Take a Chance on Me"]

console.log(updateRecords(recordCollection, 2548, "artist", ""));
// sekarang recordCollection[2548].artist hilang (deleted)

console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// sekarang recordCollection[1245].tracks = ["Addicted to Love"]

console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
// sekarang recordCollection[1245].albumTitle = "Riptide"


// Latihan soal berbasis blockchain 

// Data
const wallets = {
  1001: { owner: "Alice", balance: 10, transactions: ["deposit 10"] },
  1002: { owner: "Bob", balance: 50, transactions: ["deposit 50"] },
  1003: { owner: "Charlie", balance: 0 }
};

// Perintah
/* bikin fungsi updateWallet(wallets, id, prop, value) dengan aturan:
Selalu return object wallets.
Kalau value kosong (""), hapus property prop dari wallet dengan id itu.
Kalau prop === "balance" →
Tambahkan value (angka) ke balance sekarang.
Simpan juga transaksi "update balance X" ke array transactions.
Kalau prop === "transactions" dan wallet belum punya property transactions → bikin array kosong lalu masukkan value.
Kalau prop === "transactions" dan wallet sudah ada → tambahkan value ke akhir array.
Kalau prop bukan "balance" atau "transactions", cukup assign langsung. */

// Jawab
function updateWallet(wallet, id, prop, value) {
  if (value === "") {
    // hapus property kalau value kosong
    delete wallet[id][prop];
  } else if (prop === "balance") {
    // tambah balance
    wallet[id][prop] += value;

    // kalau belum ada transactions, bikin array kosong
    if (!wallet[id].hasOwnProperty("transactions")) {
      wallet[id]["transactions"] = [];
    }

    // catat transaksi
    wallet[id]["transactions"].push("Update balance value " + value);
  }
  return wallet;
};