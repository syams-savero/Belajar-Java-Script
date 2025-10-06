// Membuat function tanpa menggunakan else atau disebut dengan ealry return
// Contoh : 
function jumlah(a, b) {         //Membuat function jumlah dan parameter a dan b
    if (a <= 0 || b <= 0) {     //Jika  a dan b nilainya 0 atau kurang dari 0 maka tidak valid
        return "Tidak valid";   //tidak valid
    }
    return a + b;               //Jika a dan b nilai nya tidak 0 atau minus maka akan dijumlahkan
}

console.log(jumlah(1, 4));      // 1 + 4 = 5
console.log(jumlah(0, 0));      // tidak valid karena 0 + 0
console.log(jumlah(0, 1));      // tidak valid karena ada 0
