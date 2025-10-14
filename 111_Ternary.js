// Disini kita akan membuat if else tapi lebih ringkas, namanya ternary
// Contoh jika pakai if else

function validator(a, b) {
    if (a < b) {
        return "valid";
    } else {
        return "tidak valid";
    }
};

console.log(validator(1, 2))

// Jika menggunakan tenary

function validator2(a, b) {
    return a < b ? "valid" : "tidak valid";
};

console.log(validator2(5, 6));

// keduanya berjalan di logika yang sama, teatpi tenary tidak cocok jika funciton memiliki banyak kemungkinan