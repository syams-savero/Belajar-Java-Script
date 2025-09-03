const wallets = {
  101: { owner: "Alice", balance: 50, transactions: ["deposit 50"] },
  102: { owner: "Bob", balance: 100 },
  103: { owner: "Charlie", balance: 0, transactions: [] }
};

function modifyWallet(wallets, id, prop, value) {
    if (value === "") {
        delete wallets[id][prop];
    } else if (prop === "balance") {
        wallets[id]["balance"] += value;
    }
}

/* 
Kalau prop === "balance" → tambahkan value ke balance sekarang dan simpan transaksi di array transactions (bikin array kalau belum ada).

Kalau prop === "transactions" → tambahkan value ke array transaksi (bikin array kalau belum ada).

Kalau prop lain → assign value langsung ke property tersebut.

Function harus selalu return seluruh object wallets. */