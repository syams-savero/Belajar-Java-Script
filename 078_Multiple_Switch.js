// Multiple Switch statement, Berfungsi untuk beberapa kemungkinan yang output nya sama
// Misal untuk termometer, suhu 35 - 37 adalah normal, lalu suhu 38 - 40 adalah hangat, dst
// Sebagai contoh kita akan membuat beberapa pilihan jaringan blockchain dengan perbedaan pajak
// Contoh
let taxResult = "";
function tax(network) {
    switch (network) {
        case "solana":
        case "binance":
        case "hyperliquid":
            taxResult = "1$ fee";
            break;
        case "bitcoin":
        case "ethereum":
            taxResult = "5$ fee";
            break;
        case "polygon":
        case "optimism":
            taxResult = "2$ fee";
            break;
        default:
            taxResult = "Blockchain network not found, please select the available network :\n-solana\n-binance\n-hyperliquid\n-bitcoin\n-ethereum\n-polygon\n-optimism"
            break;
    }
    return taxResult;
}

// cek fungsi

// 1$ tax
let result1 = tax("solana");
console.log(result1);

let result2 = tax("binance");
console.log(result2);

let result3 = tax("hyperliquid");
console.log(result3);

// 5$ fee
let result4 = tax("bitcoin");
console.log(result4);

let result5 = tax("ethereum");
console.log(result5);

// 2$ fee
let result6 = tax("polygon");
console.log(result6);

let result7 = tax("optimism");
console.log(result7);

// Blockchain network not available
let result8 = tax("sui");
console.log(result8);
