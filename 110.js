// Membuat koversi basis data menjadi bilangan desimal menggunakan parseInt
// menggunakan function parseInt yang diberi radix untuk jenis basis data

/* | Sistem Bilangan | Radix | Simbol yang Dipakai | Contoh  | Dibaca sebagai |
| --------------- | ----- | ------------------- | ------- | -------------- |
| **Biner**       | 2     | 0, 1                | `1010₂` | base 2         |
| **Oktal**       | 8     | 0–7                 | `17₈`   | base 8         |
| **Desimal**     | 10    | 0–9                 | `42₁₀`  | base 10        |
| **Hexadecimal** | 16    | 0–9, A–F            | `FF₁₆`  | base 16        |
*/

function converterAngka (str) {
    let a = parseInt(str, 16);
    return a;
}

let hasil = converterAngka(150);
console.log(hasil);