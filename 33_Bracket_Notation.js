/* Bracket notation ([]) digunakan dalam JavaScript untuk mengakses karakter tertentu di dalam string (atau elemen dalam array).
JavaScript menggunakan Zero-based indexing, artinya:
Huruf pertama ada di posisi 0
Huruf kedua di posisi 1
dan seterusnya... 
Contoh : 																										*/

let nama = "Bilek";
let HURUFPERTAMA = "";	// diberi string kosong karena untuk penanda bahwa string ini akan diisi nantinya
HURUFPERTAMA = nama[0];
// outpunya adalah B, karena B adalah huruf pertama dari kata Bilek.