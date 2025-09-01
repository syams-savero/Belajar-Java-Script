// Mirip seperti sebelumnya disini kita akan mengakases array di dalam array
// Contoh :
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Disini kita akan mengakses "pine"
const secondTree = myPlants[1].list[1];

// Contoh di atas adalah salah satu contoh sederhana, setelah ini akan ada latihan soal yang lebih sulit
// Latihan soal :
/* Latihan Soal: Blockchain / Web3 – Advanced
Soal

Kamu diminta membuat data structure untuk sebuah aplikasi portfolio crypto user. Setiap user punya beberapa wallet, setiap wallet punya beberapa token, dan setiap token punya history transaksi.

Step 1: Buat kode JavaScript
Buat array users yang berisi 2 user.
Setiap user punya properti:
username → string
wallets → array object, tiap wallet punya:
walletName → string
tokens → array object, tiap token punya:
symbol → string
balance → number
transactions → array object, tiap transaction punya:
txHash → string
amount → number
Hint: Gunakan minimal 2 wallet per user, 2 token per wallet, 2 transaksi per token.

Step 2: Akses value tertentu
Setelah membuat data structure, tuliskan cara akses:
Ambil balance dari token kedua di wallet pertama milik user kedua.
Ambil txHash dari transaksi pertama token pertama di wallet kedua user pertama.
Ambil symbol token pertama di wallet kedua user kedua.
Ambil semua txHash dari token pertama wallet pertama user pertama. */

let users = [
    {
        username: "Icikwir",
        wallets: [
            {
                walletName: "Trezor",
                tokens: [
                    {
                        symbols: "USDT",
                        balance: 5000,
                        transactions: [
                            {
                                txHash: "sjd1200",
                                amount: 2000
                            }, 
                            {
                                txHash: "dsf8673",
                                amount: 3000
                            }
                        ]
                    }, 
                    {
                        symbols: "PENGU",
                        balance: 100000,
                        transactions: [
                            {
                                txHash: "cmks39874",
                                amount: 80000
                            }, 
                            {
                                txHash: "ckj9843",
                                amount: 2000
                            }
                        ]
                    }
                ]
            },
            {
                walletName: "Bitget Wallet",
                tokens: [
                    {
                        symbols: "BGB",
                        balance: 2000,
                        transactions: [
                            {
                                txHash: "shj3229",
                                amount: 1500
                            }, 
                            {
                                txHash: "skl9281",
                                amount: 500
                            }
                        ]
                    }, 
                    {
                        symbols: "ETH",
                        balance: 5000,
                        transactions: [
                            {
                                txHash: "dksa9821",
                                amount: 1000
                            }, 
                            {
                                txHash: "dskl9339",
                                amount: 4000
                            }
                        ]
                    }
                ]
            }
        ]
    }, 
    {
        username: "Aselole",
        wallets: [
            {
                walletName: "Metamask",
                tokens: [
                    {
                        symbols: "OP",
                        balance: 15000,
                        transactions: [
                            {
                                txHash: "djh3243",
                                amount: 10000
                            }, 
                            {
                                txHash: "kasl87346",
                                amount: 5000
                            }
                        ]
                    }, 
                    {
                        symbols: "UNI",
                        balance: 300,
                        transactions: [
                            {
                                txHash: "kjfs867213",
                                amount: 280
                            }, 
                            {
                                txHash: "akj43897",
                                amount: 20
                            }
                        ]
                    }
                ]
            }, 
            {
                walletName: "PhantomWallet",
                tokens: [
                    {
                        symbols: "SOL",
                        balance: 500,
                        transactions: [
                            {
                                txHash: "djhs812",
                                amount: 300
                            }, 
                            {
                                txHash: "dsd398",
                                amount: 200
                            }
                        ]
                    }, 
                    {
                        symbols: "TRUMP",
                        balance: 100,
                        transactions: [
                            {
                                txHash: "jkh98213",
                                amount: 70
                            }, 
                            {
                                txHash: "hdf8931",
                                amount: 30
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

console.log(users);