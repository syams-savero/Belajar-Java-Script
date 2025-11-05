// Membuat variabel dari destructure obects
// disini kita akan mengakases property dari suatu objects sekaligus menambahkanya ke variabel baru
// contoh :

// Data objects yang akan digunakan
let coinCrypto = {
    layer1: ["BTC", "ETH", "SOL", "SUI"], 
    layer2: ["OP", "ARB", "1INCH"],
    swap: ["Uniswap", "PancakeSwap",]
};

// Destructure sekaligus membuat variabel baru
let {layer1: CoinLayer1, layer2: CoinLayer2, swap: CoinSwap} = coinCrypto;

// Cek apakah pembuatan variabel berhasil
console.log(CoinLayer1);
console.log(CoinLayer2);
console.log(CoinSwap);
console.log(coinCrypto);    // cek data keseluruhan

// anggap saja ada variabel baru tapi tidak terlihat
// fungsi dari destructure ini adalah untuk meringkas proses pengambilan data dari objects