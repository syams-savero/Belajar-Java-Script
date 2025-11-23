// Mempersingkat cara membuat objects pada function
// Contoh lama
function dataDiri (nama, umur) {
    let a = {
        nama: nama,
        umur: umur
    };
    return a
};

console.log(dataDiri("Hayoyo", 16));

// Cara baru
let dataDiri1 = (nama, umur) => {
    let a = {nama, umur};
    return a
};

console.log(dataDiri1("haya", 14));