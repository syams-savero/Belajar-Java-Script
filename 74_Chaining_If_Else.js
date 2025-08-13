// Chaining If Else, Membuat beberapa kemungkinan berantai atau saling terhubung
// Contoh :
// Contoh kasus : ingin membuat beberapa kelas berdasarkan level. misal, level 1-10 kroco level 2-20 amatir
function tingkat(level) {
    if (level < 10) {           // Jika level dibawah 10 kroco
        return "Kroco";
    } else if (level < 20) {    // Jika level dibawah 20 Amatir
        return "Amatir";
    } else if (level < 30) {    // Jika level dibawah 30 Junior
        return "Junior";
    } else if (level < 40) {    // Jika level dibawah 40 Senior
        return "Senior";
    } else if (level < 50) {    // Jika level dibawah 50 Profesional
        return "Profesional";
    } else {
        return "Sepuh";         // Jika tidak dari semua di atas maka Sepuh
    }
}

console.log(tingkat(5));
console.log(tingkat(13));
console.log(tingkat(23));
console.log(tingkat(37));
console.log(tingkat(47));
console.log(tingkat(77));